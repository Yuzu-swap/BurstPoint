/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BurstPoint, BurstPointInterface } from "../BurstPoint";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "beginGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "burstValue",
        type: "uint256",
      },
    ],
    name: "bet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "betLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "closeGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "escape",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gameLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getBurstValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getGameRecords",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "betAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "burstValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "escapeBlockNum",
            type: "uint256",
          },
          {
            internalType: "enum BRecordStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct BetRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increasePerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multiple",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerAdd",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "random",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526064600255600a6003556032600455600a60055534801561002457600080fd5b50600061002f6100c6565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100816100c6565b6001600160a01b03166100926100ca565b6001600160a01b0316146100c15760405162461bcd60e51b81526004016100b8906100d9565b60405180910390fd5b61010e565b3390565b6000546001600160a01b031690565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6110748061011d6000396000f3fe6080604052600436106100f25760003560e01c80636ffcc7191161008a5780638da5cb5b116100595780638da5cb5b14610241578063ad7a672f14610263578063b863bd3714610278578063f2fde38b14610298576100f2565b80636ffcc719146101fc578063715018a61461020f5780637a2d5702146102245780638c556c921461022c576100f2565b8063437a8ae6116100c6578063437a8ae61461017957806345b88da11461018e578063466985f3146101ae57806354c1750b146101ce576100f2565b80629d95ab146100f75780631fd1b14e1461012257806325a7650a146101375780632d6ef31014610159575b600080fd5b34801561010357600080fd5b5061010c6102b8565b6040516101199190611035565b60405180910390f35b34801561012e57600080fd5b5061010c6102be565b34801561014357600080fd5b50610157610152366004610d61565b6102c4565b005b34801561016557600080fd5b50610157610174366004610d61565b6103a6565b34801561018557600080fd5b5061010c610644565b34801561019a57600080fd5b5061010c6101a9366004610d61565b61064a565b3480156101ba57600080fd5b506101576101c9366004610d61565b6106d2565b3480156101da57600080fd5b506101ee6101e9366004610d61565b61079a565b604051610119929190610df1565b61015761020a366004610d79565b610935565b34801561021b57600080fd5b50610157610a71565b610157610afa565b34801561023857600080fd5b5061010c610b3b565b34801561024d57600080fd5b50610256610b41565b6040516101199190610ddd565b34801561026f57600080fd5b5061010c610b50565b34801561028457600080fd5b5061010c610293366004610d61565b610b54565b3480156102a457600080fd5b506101576102b3366004610d33565b610b93565b60035481565b60045481565b6102cc610c53565b6001600160a01b03166102dd610b41565b6001600160a01b03161461030c5760405162461bcd60e51b815260040161030390611000565b60405180910390fd5b604080516000808252602082019092529061032861044c610b54565b9050610332610c57565b506040805160608101825282815260208082018581526001838501819052600088815290835293909320825181559251805192938493909261037b926002850192910190610c82565b50604082015160038201805460ff1916600183600281111561039957fe5b0217905550505050505050565b6103ae610c53565b6001600160a01b03166103bf610b41565b6001600160a01b0316146103e55760405162461bcd60e51b815260040161030390611000565b600454600354820101431161040c5760405162461bcd60e51b815260040161030390610f5f565b600081815260016020819052604090912090600382015460ff16600281111561043157fe5b1461044e5760405162461bcd60e51b815260040161030390610e9b565b805460028201805460408051602080840282018101909252828152606093909290918301828280156104a957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161048b575b5050505050905060005b8151811015610630576104c4610ce7565b8460010160008484815181106104d657fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff16600281111561054557fe5b600281111561055057fe5b9052509050600060018260600151600281111561056957fe5b141561057a575060208101516105ba565b60028260600151600281111561058c57fe5b14156105ba5760025460055460035489856040015103030201905081602001518111156105ba575060208101515b84811161062657600060025482846000015102816105d457fe5b0490508484815181106105e357fe5b60200260200101516001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015610623573d6000803e3d6000fd5b50505b50506001016104b3565b505050600301805460ff1916600217905550565b60025481565b6000610654610c53565b6001600160a01b0316610665610b41565b6001600160a01b03161461068b5760405162461bcd60e51b815260040161030390611000565b600082815260016020526040812090600382015460ff1660028111156106ad57fe5b14156106cb5760405162461bcd60e51b815260040161030390610ec3565b5492915050565b6003548101431180156106ed57506004546003548201014311155b6107095760405162461bcd60e51b815260040161030390610f34565b600081815260016020819052604090912090600382015460ff16600281111561072e57fe5b1461074b5760405162461bcd60e51b815260040161030390610e9b565b3360009081526001808301602052604090912090600382015460ff16600281111561077257fe5b1461078f5760405162461bcd60e51b815260040161030390610fcb565b436002909101555050565b6000818152600160209081526040918290206002810180548451818502810185019095528085526060948594859391929083018282801561080457602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116107e6575b505050505090506060815167ffffffffffffffff8111801561082557600080fd5b5060405190808252806020026020018201604052801561085f57816020015b61084c610ce7565b8152602001906001900390816108445790505b50905060005b825181101561092957610876610ce7565b84600101600085848151811061088857fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff1660028111156108f757fe5b600281111561090257fe5b8152505090508083838151811061091557fe5b602090810291909101015250600101610865565b50909350915050915091565b600082815260016020819052604090912090600382015460ff16600281111561095a57fe5b14801561096b575060035483014311155b8015610997575033600090815260018201602052604081206003015460ff16600281111561099557fe5b145b6109b35760405162461bcd60e51b815260040161030390610f89565b6109bb610ce7565b604051806080016040528034815260200184815260200160008152602001600160028111156109e657fe5b90523360009081526001808501602090815260409283902084518155908401518183015591830151600280840191909155606084015160038401805495965086959193909260ff19909216918490811115610a3d57fe5b0217905550505060029091018054600181018255600091825260209091200180546001600160a01b03191633179055505050565b610a79610c53565b6001600160a01b0316610a8a610b41565b6001600160a01b031614610ab05760405162461bcd60e51b815260040161030390611000565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b610b02610c53565b6001600160a01b0316610b13610b41565b6001600160a01b031614610b395760405162461bcd60e51b815260040161030390611000565b565b60055481565b6000546001600160a01b031690565b4790565b600081424433604051602001610b6c93929190610db5565b6040516020818303038152906040528051906020012060001c81610b8c57fe5b0692915050565b610b9b610c53565b6001600160a01b0316610bac610b41565b6001600160a01b031614610bd25760405162461bcd60e51b815260040161030390611000565b6001600160a01b038116610bf85760405162461bcd60e51b815260040161030390610eee565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6040518060600160405280600081526020016060815260200160006002811115610c7d57fe5b905290565b828054828255906000526020600020908101928215610cd7579160200282015b82811115610cd757825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190610ca2565b50610ce3929150610d14565b5090565b604051806080016040528060008152602001600081526020016000815260200160006002811115610c7d57fe5b5b80821115610ce35780546001600160a01b0319168155600101610d15565b600060208284031215610d44578081fd5b81356001600160a01b0381168114610d5a578182fd5b9392505050565b600060208284031215610d72578081fd5b5035919050565b60008060408385031215610d8b578081fd5b50508035926020909101359150565b6001600160a01b03169052565b60038110610db157fe5b9052565b928352602083019190915260601b6bffffffffffffffffffffffff1916604082015260540190565b6001600160a01b0391909116815260200190565b6040808252835182820181905260009190606090818501906020808901865b83811015610e3357610e23858351610d9a565b9382019390820190600101610e10565b50508683038188015287518084528882019382019250865b81811015610e8c5784518051855283810151848601528781015188860152860151610e7887860182610da7565b509382019360809390930192600101610e4b565b50919998505050505050505050565b6020808252600e908201526d19d85b59481b9bdd081cdd185c9d60921b604082015260600190565b60208082526011908201527019d85b59481a5cc81b9bdd08195e1a5cdd607a1b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526011908201527032b9b1b0b832903a34b6b29032b93937b960791b604082015260600190565b60208082526010908201526f31b637b9b2903a34b6b29032b93937b960811b604082015260600190565b60208082526022908201527f6265742074696d65206572726f72206f72206861766520616c72656164792062604082015261195d60f21b606082015260800190565b6020808252818101527f6974206973206e6f742072696768742073746174757320746f20657363617065604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b9081526020019056fea2646970667358221220c1affd90482f280a5ba61a525bc5a431a67f956061b9854718db2fb65784c16164736f6c634300060c0033";

export class BurstPoint__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BurstPoint> {
    return super.deploy(overrides || {}) as Promise<BurstPoint>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BurstPoint {
    return super.attach(address) as BurstPoint;
  }
  connect(signer: Signer): BurstPoint__factory {
    return super.connect(signer) as BurstPoint__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BurstPointInterface {
    return new utils.Interface(_abi) as BurstPointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurstPoint {
    return new Contract(address, _abi, signerOrProvider) as BurstPoint;
  }
}