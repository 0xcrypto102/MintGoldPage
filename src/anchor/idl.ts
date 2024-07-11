export type Dapp = {
  "address": "CRv6vxx2ZAxdUmi1aDD5xSbE2Qor3yyetxPYJK9V7rNJ",
  "metadata": {
    "name": "dapp",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addWhitelistToken",
      "discriminator": [
        128,
        56,
        125,
        80,
        142,
        129,
        31,
        103
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "deleteWhitelistToken",
      "discriminator": [
        240,
        170,
        164,
        138,
        16,
        231,
        171,
        26
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "editWhitelistToken",
      "discriminator": [
        241,
        130,
        69,
        114,
        171,
        6,
        221,
        200
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "initMint",
      "discriminator": [
        126,
        176,
        233,
        16,
        66,
        117,
        209,
        125
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintTokenWithBurn",
      "discriminator": [
        14,
        187,
        13,
        156,
        159,
        100,
        79,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintTokenWithBurn2022",
      "discriminator": [
        52,
        122,
        177,
        219,
        234,
        63,
        248,
        213
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    },
    {
      "name": "whitelistToken",
      "discriminator": [
        179,
        42,
        207,
        134,
        155,
        42,
        77,
        114
      ]
    }
  ],
  "events": [
    {
      "name": "addWhiteListTokenEvent",
      "discriminator": [
        219,
        182,
        46,
        22,
        13,
        250,
        66,
        207
      ]
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "discriminator": [
        101,
        19,
        21,
        14,
        96,
        57,
        29,
        213
      ]
    },
    {
      "name": "editWhiteListTokenEvent",
      "discriminator": [
        60,
        213,
        209,
        136,
        205,
        201,
        172,
        2
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotInitialized",
      "msg": "The contract was not initialized yet"
    },
    {
      "code": 6001,
      "name": "NotAuthorized",
      "msg": "The current signer is not authorized as owner"
    },
    {
      "code": 6002,
      "name": "ZeroAmount",
      "msg": "The mint amount should be bigger than 0"
    },
    {
      "code": 6003,
      "name": "AlreadyExisit",
      "msg": "The whitelist token is already exisited"
    },
    {
      "code": 6004,
      "name": "WrongBurnTokenAddress",
      "msg": "The token address is wrong, please provide the correct token address"
    },
    {
      "code": 6005,
      "name": "WrongBurnTokenTypeForSplToken",
      "msg": "The token's type is not correct, it should be SPL-TOKEN"
    },
    {
      "code": 6006,
      "name": "WrongBurnTokenTypeForToken2022",
      "msg": "The token's type is not correct, it should be SPL-TOKEN"
    }
  ],
  "types": [
    {
      "name": "addWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "createMintAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "editWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistTokens",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "whitelistToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "globalStateSeed",
      "type": "bytes",
      "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
    }
  ]
};

export const IDL: Dapp = {
  "address": "CRv6vxx2ZAxdUmi1aDD5xSbE2Qor3yyetxPYJK9V7rNJ",
  "metadata": {
    "name": "dapp",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addWhitelistToken",
      "discriminator": [
        128,
        56,
        125,
        80,
        142,
        129,
        31,
        103
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "deleteWhitelistToken",
      "discriminator": [
        240,
        170,
        164,
        138,
        16,
        231,
        171,
        26
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "editWhitelistToken",
      "discriminator": [
        241,
        130,
        69,
        114,
        171,
        6,
        221,
        200
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "whitelistToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "arg",
                "path": "tokenAddress"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenAddress",
          "type": "pubkey"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "div",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "bool"
        }
      ]
    },
    {
      "name": "initMint",
      "discriminator": [
        126,
        176,
        233,
        16,
        66,
        117,
        209,
        125
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mintTokenWithBurn",
      "discriminator": [
        14,
        187,
        13,
        156,
        159,
        100,
        79,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintTokenWithBurn2022",
      "discriminator": [
        52,
        122,
        177,
        219,
        234,
        63,
        248,
        213
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84,
                  45,
                  65,
                  85,
                  84,
                  72,
                  79,
                  82,
                  73,
                  84,
                  89
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "mintTokenAccount",
          "writable": true
        },
        {
          "name": "extraMetasAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "burnMint",
          "writable": true
        },
        {
          "name": "burnMintTokenAccount",
          "writable": true
        },
        {
          "name": "whitelistToken",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  87,
                  72,
                  73,
                  84,
                  69,
                  76,
                  73,
                  83,
                  84,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "burnMint"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    },
    {
      "name": "whitelistToken",
      "discriminator": [
        179,
        42,
        207,
        134,
        155,
        42,
        77,
        114
      ]
    }
  ],
  "events": [
    {
      "name": "addWhiteListTokenEvent",
      "discriminator": [
        219,
        182,
        46,
        22,
        13,
        250,
        66,
        207
      ]
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "discriminator": [
        101,
        19,
        21,
        14,
        96,
        57,
        29,
        213
      ]
    },
    {
      "name": "editWhiteListTokenEvent",
      "discriminator": [
        60,
        213,
        209,
        136,
        205,
        201,
        172,
        2
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotInitialized",
      "msg": "The contract was not initialized yet"
    },
    {
      "code": 6001,
      "name": "NotAuthorized",
      "msg": "The current signer is not authorized as owner"
    },
    {
      "code": 6002,
      "name": "ZeroAmount",
      "msg": "The mint amount should be bigger than 0"
    },
    {
      "code": 6003,
      "name": "AlreadyExisit",
      "msg": "The whitelist token is already exisited"
    },
    {
      "code": 6004,
      "name": "WrongBurnTokenAddress",
      "msg": "The token address is wrong, please provide the correct token address"
    },
    {
      "code": 6005,
      "name": "WrongBurnTokenTypeForSplToken",
      "msg": "The token's type is not correct, it should be SPL-TOKEN"
    },
    {
      "code": 6006,
      "name": "WrongBurnTokenTypeForToken2022",
      "msg": "The token's type is not correct, it should be SPL-TOKEN"
    }
  ],
  "types": [
    {
      "name": "addWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "createMintAccountArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "deleteWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "editWhiteListTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistToken",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "whitelistTokens",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "whitelistToken",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "div",
            "type": "u64"
          },
          {
            "name": "tokenType",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "globalStateSeed",
      "type": "bytes",
      "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
    }
  ]
}
