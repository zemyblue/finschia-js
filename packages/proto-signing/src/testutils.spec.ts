/** @see https://rgxdb.com/r/1NUN74O6 */
export const base64Matcher =
  /^(?:[a-zA-Z0-9+/]{4})*(?:|(?:[a-zA-Z0-9+/]{3}=)|(?:[a-zA-Z0-9+/]{2}==)|(?:[a-zA-Z0-9+/]{1}===))$/;

export const faucet = {
  mnemonic:
    "economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone",
  pubkey: {
    type: "ostracon/PubKeySecp256k1",
    value: "Av5a6+1yql0DfiZ5MUZvAUYm7NcOA0PVI9cK2Vvo1GQV",
  },
  address: "link1xzyh64ze36dc5xv30np8a8lhzz8aqerptenuyr",
};

/** See TEST_VECTORS.md for how those are generated */
export const testVectors = [
  {
    inputs: {
      accountNumber: 1,
      sequence: 0,
      bodyBytes:
        "0a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e79120731323334353637",
      authInfoBytes:
        "0a4e0a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a02080112120a0c0a04636f6e7912043230303010c09a0c",
    },
    outputs: {
      signBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712640a4e0a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a02080112120a0c0a04636f6e7912043230303010c09a0c1a0c73696d642d74657374696e672001",
      signature:
        "c0ea05a4d89162a607315a465c8d4486644fadc817d151ca4eac41a7200276390cc935828f9bda19dcc49fdc5acaf56372dcd4653827d8b6c5e1eaa4761f97eb",
      signedTxBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712640a4e0a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a02080112120a0c0a04636f6e7912043230303010c09a0c1a40c0ea05a4d89162a607315a465c8d4486644fadc817d151ca4eac41a7200276390cc935828f9bda19dcc49fdc5acaf56372dcd4653827d8b6c5e1eaa4761f97eb",
    },
  },
  {
    inputs: {
      accountNumber: 1,
      sequence: 1,
      bodyBytes:
        "0a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e79120731323334353637",
      authInfoBytes:
        "0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180112120a0c0a04636f6e7912043230303010c09a0c",
    },
    outputs: {
      signBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712660a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180112120a0c0a04636f6e7912043230303010c09a0c1a0c73696d642d74657374696e672001",
      signature:
        "e2b31e6cc4c3021bc6cc43d0cbe4229dc480e53c4191b45f7397339102f763ac5275baccb2e27a5356551eb716fcb154771b7c9160ec24ab3d4e1f3036ddbe38",
      signedTxBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712660a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180112120a0c0a04636f6e7912043230303010c09a0c1a40e2b31e6cc4c3021bc6cc43d0cbe4229dc480e53c4191b45f7397339102f763ac5275baccb2e27a5356551eb716fcb154771b7c9160ec24ab3d4e1f3036ddbe38",
    },
  },
  {
    inputs: {
      accountNumber: 1,
      sequence: 2,
      bodyBytes:
        "0a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e79120731323334353637",
      authInfoBytes:
        "0a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180212120a0c0a04636f6e7912043230303010c09a0c",
    },
    outputs: {
      signBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712660a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180212120a0c0a04636f6e7912043230303010c09a0c1a0c73696d642d74657374696e672001",
      signature:
        "1808779719fecc38ce22a5ac560eb45a16e48aef536e96d6ee99fbcb3f2f57f02c1ac128fa67f8298058f0c68d76b4aa30f8ad2ba62274c82c95dc2707b63d4e",
      signedTxBytes:
        "0a8e010a8b010a1c2f636f736d6f732e62616e6b2e763162657461312e4d736753656e64126b0a2b6c696e6b31787a796836347a653336646335787633306e703861386c687a7a38617165727074656e757972122b6c696e6b31747773666d756a32386e64706835346b346e77386372777538683963386d68337274783730351a0f0a04636f6e7912073132333435363712660a500a460a1f2f636f736d6f732e63727970746f2e736563703235366b312e5075624b657912230a2102fe5aebed72aa5d037e267931466f014626ecd70e0343d523d70ad95be8d4641512040a020801180212120a0c0a04636f6e7912043230303010c09a0c1a401808779719fecc38ce22a5ac560eb45a16e48aef536e96d6ee99fbcb3f2f57f02c1ac128fa67f8298058f0c68d76b4aa30f8ad2ba62274c82c95dc2707b63d4e",
    },
  },
];
