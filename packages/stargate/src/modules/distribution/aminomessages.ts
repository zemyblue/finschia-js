/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsg, Coin } from "@lbmjs/amino";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
} from "lbmjs-types/lbm/distribution/v1/tx";

import { AminoConverter } from "../..";

/** Changes the withdraw address for a delegator (or validator self-delegation) */
export interface AminoMsgSetWithdrawAddress extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "lbm-sdk/MsgModifyWithdrawAddress";
  readonly value: {
    /** Bech32 account address */
    readonly delegator_address: string;
    /** Bech32 account address */
    readonly withdraw_address: string;
  };
}

export function isAminoMsgSetWithdrawAddress(msg: AminoMsg): msg is AminoMsgSetWithdrawAddress {
  // NOTE: Type string and names diverge here!
  return msg.type === "lbm-sdk/MsgModifyWithdrawAddress";
}

/** Message for delegation withdraw from a single validator */
export interface AminoMsgWithdrawDelegatorReward extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "lbm-sdk/MsgWithdrawDelegationReward";
  readonly value: {
    /** Bech32 account address */
    readonly delegator_address: string;
    /** Bech32 account address */
    readonly validator_address: string;
  };
}

export function isAminoMsgWithdrawDelegatorReward(msg: AminoMsg): msg is AminoMsgWithdrawDelegatorReward {
  // NOTE: Type string and names diverge here!
  return msg.type === "lbm-sdk/MsgWithdrawDelegationReward";
}

/** Message for validator withdraw */
export interface AminoMsgWithdrawValidatorCommission extends AminoMsg {
  readonly type: "lbm-sdk/MsgWithdrawValidatorCommission";
  readonly value: {
    /** Bech32 account address */
    readonly validator_address: string;
  };
}

export function isAminoMsgWithdrawValidatorCommission(
  msg: AminoMsg,
): msg is AminoMsgWithdrawValidatorCommission {
  return msg.type === "lbm-sdk/MsgWithdrawValidatorCommission";
}

/** Allows an account to directly fund the community pool. */
export interface AminoMsgFundCommunityPool extends AminoMsg {
  readonly type: "lbm-sdk/MsgFundCommunityPool";
  readonly value: {
    readonly amount: readonly Coin[];
    /** Bech32 account address */
    readonly depositor: string;
  };
}

export function isAminoMsgFundCommunityPool(msg: AminoMsg): msg is AminoMsgFundCommunityPool {
  return msg.type === "lbm-sdk/MsgFundCommunityPool";
}

export function createDistributionAminoConverters(): Record<
  string,
  AminoConverter | "not_supported_by_chain"
> {
  return {
    "/lbm.distribution.v1.MsgFundCommunityPool": {
      aminoType: "lbm-sdk/MsgFundCommunityPool",
      toAmino: ({ amount, depositor }: MsgFundCommunityPool): AminoMsgFundCommunityPool["value"] => ({
        amount: [...amount],
        depositor: depositor,
      }),
      fromAmino: ({ amount, depositor }: AminoMsgFundCommunityPool["value"]): MsgFundCommunityPool => ({
        amount: [...amount],
        depositor: depositor,
      }),
    },
    "/lbm.distribution.v1.MsgSetWithdrawAddress": {
      aminoType: "lbm-sdk/MsgModifyWithdrawAddress",
      toAmino: ({
        delegatorAddress,
        withdrawAddress,
      }: MsgSetWithdrawAddress): AminoMsgSetWithdrawAddress["value"] => ({
        delegator_address: delegatorAddress,
        withdraw_address: withdrawAddress,
      }),
      fromAmino: ({
        delegator_address,
        withdraw_address,
      }: AminoMsgSetWithdrawAddress["value"]): MsgSetWithdrawAddress => ({
        delegatorAddress: delegator_address,
        withdrawAddress: withdraw_address,
      }),
    },
    "/lbm.distribution.v1.MsgWithdrawDelegatorReward": {
      aminoType: "lbm-sdk/MsgWithdrawDelegationReward",
      toAmino: ({
        delegatorAddress,
        validatorAddress,
      }: MsgWithdrawDelegatorReward): AminoMsgWithdrawDelegatorReward["value"] => ({
        delegator_address: delegatorAddress,
        validator_address: validatorAddress,
      }),
      fromAmino: ({
        delegator_address,
        validator_address,
      }: AminoMsgWithdrawDelegatorReward["value"]): MsgWithdrawDelegatorReward => ({
        delegatorAddress: delegator_address,
        validatorAddress: validator_address,
      }),
    },
    "/lbm.distribution.v1.MsgWithdrawValidatorCommission": {
      aminoType: "lbm-sdk/MsgWithdrawValidatorCommission",
      toAmino: ({
        validatorAddress,
      }: MsgWithdrawValidatorCommission): AminoMsgWithdrawValidatorCommission["value"] => ({
        validator_address: validatorAddress,
      }),
      fromAmino: ({
        validator_address,
      }: AminoMsgWithdrawValidatorCommission["value"]): MsgWithdrawValidatorCommission => ({
        validatorAddress: validator_address,
      }),
    },
  };
}
