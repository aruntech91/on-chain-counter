import { RPC } from "@ckb-lumos/rpc";
import { initializeConfig } from "@ckb-lumos/config-manager";
import { predefined } from "@ckb-lumos/config-manager";

// Initialize Lumos for CKB Dev chain
initializeConfig(predefined.AGGRON4);

// RPC connection to local CKB Dev node
export const rpc = new RPC("http://127.0.0.1:8114");
