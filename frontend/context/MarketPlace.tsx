"use client"

import React, { createContext, useEffect, useState } from 'react';
import { ADDRESS, ABI } from '../constants/index';
import { ethers , BigNumber} from 'ethers';
import Router from 'next/router';
import Swal from 'sweetalert2';
import Freelancer from '@/app/interfaces/freelancerProps';

export const GOVERNANCE_CONTEXT = createContext<Freelancer | undefined>(
    undefined
  );

