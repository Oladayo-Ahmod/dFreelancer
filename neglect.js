
import { ethers } from "hardhat";
import { expect } from "chai";
import { NFTAuction } from "../typechain-types/contracts";
import nftAuctionDeployer from "./helpers/nft-auction.deployer";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethToWei, increaseTime, toUnits } from "./helpers/test.utils";

describe.only("NFT Auction Test Cases", () => {
  let nftAuctionContract: NFTAuction,
    userMinter: SignerWithAddress,
    bidder: SignerWithAddress,
    bidder2: SignerWithAddress,
    tokenId: number,
    listingId: number;

  before(async () => {
    [userMinter, bidder, bidder2] = await ethers.getSigners();

    ({ nftAuctionContract } = await nftAuctionDeployer());
  });

  it("It should mint an NFT", async () => {
    // The user mints the NFT
    const mintTrx: any = await nftAuctionContract
      .connect(userMinter)
      .mint("ape-vv-ss", userMinter.address);

    const trxReceipt = await mintTrx.wait();
    tokenId = Number(trxReceipt?.events[0]?.args["tokenId"]);

    // NFT ID must be 1
    expect(tokenId).to.be.equal(1);

    // User minter must be the owner of NFT 1
    expect(userMinter.address).to.be.equal(
      await nftAuctionContract.ownerOf(tokenId)
    );

    // User minter must own NFT 1
    expect(
      Number(await nftAuctionContract.balanceOf(userMinter.address))
    ).to.be.equal(1);
  });

  it("It should auction listing", async () => {
    // The user create auction listing to run for 2 days
    const auctionListingTrx: any = await nftAuctionContract
      .connect(userMinter)
      .createAuctionListing(ethToWei("0.3"), tokenId, 86400 * 2);

    const trxReceipt = await auctionListingTrx.wait();
    listingId = Number(trxReceipt?.events[2]?.args["listingId"]);

    // Listing ID must be 1
    expect(listingId).to.be.equal(1);

    // The current contract must become escrow account
    expect(nftAuctionContract.address).to.be.equal(
      await nftAuctionContract.ownerOf(tokenId)
    );
  });

  it("It should place bids, update bid, complete auction & withdraw funds", async () => {
    const bidderBalanceBeforeBid = await ethers.provider.getBalance(
      bidder.address
    );
    const bidder2BalanceBeforeBid = await ethers.provider.getBalance(
      bidder2.address
    );

    // bidder 1 & 2 place their bids
    await nftAuctionContract
      .connect(bidder)
      .bid(listingId, { value: ethToWei("0.6") });

    await nftAuctionContract
      .connect(bidder2)
      .bid(listingId, { value: ethToWei("0.7") });

    // bidder 1 updates his bid in order to become the highest bidder
    await nftAuctionContract
      .connect(bidder)
      .bid(listingId, { value: ethToWei("0.2") });

    const bidderBalanceAfterBid = await ethers.provider.getBalance(
      bidder.address
    );
    const bidder2BalanceAfterBid = await ethers.provider.getBalance(
      bidder2.address
    );

    expect(toUnits(bidderBalanceBeforeBid)).to.be.greaterThan(
      toUnits(bidderBalanceAfterBid)
    );
    expect(toUnits(bidder2BalanceBeforeBid)).to.be.greaterThan(
      toUnits(bidder2BalanceAfterBid)
    );

    // After 3 days the auction has ended
    await increaseTime(3 * 86400);

    const nftOwnerBalanceBeforeAuctionCompletion =
      await ethers.provider.getBalance(userMinter.address);

    // The highest bidder complete the auction
    await nftAuctionContract.connect(bidder).completeAuction(listingId);

    const nftOwnerBalanceAfterAuctionCompletion =
      await ethers.provider.getBalance(userMinter.address);

    // The NFT owner collects funds from the highest bidder
    expect(toUnits(nftOwnerBalanceAfterAuctionCompletion)).to.be.greaterThan(
      toUnits(nftOwnerBalanceBeforeAuctionCompletion)
    );

    // The Highest bidder becomes the new NFT owner
    expect(await nftAuctionContract.ownerOf(tokenId)).to.be.equal(
      bidder.address
    );

    expect(
      Number(await nftAuctionContract.balanceOf(userMinter.address))
    ).to.be.equal(0);
    expect(
      Number(await nftAuctionContract.balanceOf(bidder.address))
    ).to.be.equal(1);

    // The bidder 2 collects his funds after the auction has ended
    const withdrawTrx = await nftAuctionContract
      .connect(bidder2)
      .withdrawBid(listingId);

    const withdrawReceipt: any = await withdrawTrx.wait();
    const withdrawBidder = withdrawReceipt.events[0]?.args["bidder"];
    const withdrawBid = withdrawReceipt.events[0]?.args["bid"];

    expect(withdrawBidder).to.be.equal(bidder2.address);
    expect(toUnits(withdrawBid)).to.be.equal(0.7);
  });
});
view rawauction.test.ts hosted with ❤ by GitHub