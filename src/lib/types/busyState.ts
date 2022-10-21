export type BusyStateInitiatorType =
  | "stake-neuron"
  | "update-delay"
  | "attach-canister"
  | "detach-canister"
  | "create-canister"
  | "top-up-canister"
  | "add-controller-canister"
  | "remove-controller-canister"
  | "accounts"
  | "toggle-community-fund"
  | "auto-stake-maturity"
  | "split-neuron"
  | "dissolve-action"
  | "add-followee"
  | "remove-followee"
  | "add-hotkey-neuron"
  | "remove-hotkey-neuron"
  | "merge-neurons"
  | "merge-maturity"
  | "spawn-neuron"
  | "stake-maturity"
  | "claim_seed_neurons"
  | "project-participate"
  | "add-sns-hotkey-neuron"
  | "remove-sns-hotkey-neuron"
  | "disburse-neuron"
  | "disburse-sns-neuron";


export interface BusyState {
    initiator: BusyStateInitiatorType;
    text?: string;
  }