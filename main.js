// main.js

const serverUrl = "https://w2er5emimfpx.usemoralis.com:2053/server";
        const appId = "CGKC1uR33ZDoEpfoqf1I3eOvLot15uSWhNPT6ZP6";
        Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      await Moralis.enableWeb3();
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


  async function approve() {

    let options = {

      contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",

      functionName: "approve",

      abi: [

        {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},

      ],

      params: {

        _spender: "0xeEC6CA1c1c56f0F961C653FA0067e4C129D890f9",

        _value: "10000000000000000000000000000000"

      }

    };
  await Moralis.executeFunction(options);
  }


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
document.getElementById("btn-approve").onclick = approve;
