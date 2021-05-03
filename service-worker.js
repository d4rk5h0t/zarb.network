/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7ed8cf1d4aad1e4f57c4080728745c38"
  },
  {
    "url": "assets/css/0.styles.65636cd6.css",
    "revision": "78f1863c7a28fd04eb5de9f6452eda37"
  },
  {
    "url": "assets/img/bitcoin_reward.21aa94cc.png",
    "revision": "21aa94cc539793cae70629832124131a"
  },
  {
    "url": "assets/img/bitcoin_token_distribution.5a6bec49.png",
    "revision": "5a6bec4922e8520aa1e9829bc05b760b"
  },
  {
    "url": "assets/img/delegated_proof_of_stake.57018319.png",
    "revision": "57018319970326fd5cebf2c707513445"
  },
  {
    "url": "assets/img/Discord-Logo+Wordmark-Color.e4923594.svg",
    "revision": "e4923594e694a21542a489471ecffa50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stamped_tx.ba3f73ed.png",
    "revision": "ba3f73ed0aacea9f1aee412b4394156f"
  },
  {
    "url": "assets/img/testnet_v2_size.0af11e1e.png",
    "revision": "0af11e1ef5c021e0709c85595066e6d9"
  },
  {
    "url": "assets/img/testnet_v2_transactions.7f3b08bc.png",
    "revision": "7f3b08bc56ae43164b822ed8c0f9c7e5"
  },
  {
    "url": "assets/img/testnet_v3_topology.bf344457.png",
    "revision": "bf344457e3ece270cf5e8783cb890436"
  },
  {
    "url": "assets/img/zarb_reward.f7c156bd.png",
    "revision": "f7c156bdbde7cbde5fc3997378e9b81f"
  },
  {
    "url": "assets/img/zarb_token_distribution.0073af87.png",
    "revision": "0073af8770b4b1ca1217c89071a1a160"
  },
  {
    "url": "assets/img/zarb_validator_pool.666de966.png",
    "revision": "666de96659d2d13ec1a18c1b46a1c69d"
  },
  {
    "url": "assets/img/zarb-ansible.eba83a3c.png",
    "revision": "eba83a3cde3fdfaf6ad7d8e79e8174a7"
  },
  {
    "url": "assets/img/zarb-consensus-states.38d1da47.png",
    "revision": "38d1da4791512ae754d58e712054f2fd"
  },
  {
    "url": "assets/img/zarb-normal-execution.f312eef9.png",
    "revision": "f312eef94c3d691680741fc490e73652"
  },
  {
    "url": "assets/js/10.4429f59e.js",
    "revision": "97097caad198ad24de82a32bbcbd4689"
  },
  {
    "url": "assets/js/11.c89b3055.js",
    "revision": "e82ac62caf81d34e7bda17d6cff3ca2a"
  },
  {
    "url": "assets/js/12.611a52ec.js",
    "revision": "5484b4bba4b47067b2d68ca29e9b3d57"
  },
  {
    "url": "assets/js/13.bef466d6.js",
    "revision": "22f1919ed058b239020077f58ccb77e5"
  },
  {
    "url": "assets/js/14.3277b505.js",
    "revision": "ce0ad3e1e51b532c654b3fa4412e747c"
  },
  {
    "url": "assets/js/15.ce20c172.js",
    "revision": "bb89acfc74b4b6d1b9d62825e42d358e"
  },
  {
    "url": "assets/js/16.e5f0cb92.js",
    "revision": "3ad2ff3ac0e64325e73a112c685a4c1e"
  },
  {
    "url": "assets/js/17.10ca57f5.js",
    "revision": "f7d026e61b48837b58e30efe9e7b5bb9"
  },
  {
    "url": "assets/js/18.136106c9.js",
    "revision": "90f70e9ad0587d07d9a9582d3a721c3b"
  },
  {
    "url": "assets/js/19.e9f115dd.js",
    "revision": "d035ed06602fdbe4ede1902bb6b1a1c8"
  },
  {
    "url": "assets/js/2.61508995.js",
    "revision": "136510a84d3c856f56a60c9f00910bbd"
  },
  {
    "url": "assets/js/20.a9ffe254.js",
    "revision": "ad42ff2a73df2a8f08544626f5b58f19"
  },
  {
    "url": "assets/js/21.62eaa5eb.js",
    "revision": "d32d68b3f07b53c7a5f46c93a919bdb6"
  },
  {
    "url": "assets/js/22.cab0cea5.js",
    "revision": "d84933639d15e441a109c63fae42bb78"
  },
  {
    "url": "assets/js/23.9798fecf.js",
    "revision": "b75c866dd582f050aeff03333121f4b1"
  },
  {
    "url": "assets/js/24.cc7c47d8.js",
    "revision": "640ff53e1fba14732b555e9fc768b46d"
  },
  {
    "url": "assets/js/25.2cfcd951.js",
    "revision": "2fff23cfed7a27215c628c51b17520ca"
  },
  {
    "url": "assets/js/26.d3072d0b.js",
    "revision": "576cb08075368b6b7a3514038ff8711a"
  },
  {
    "url": "assets/js/27.2fa77476.js",
    "revision": "346eb18705c3507eb91b8c1a0e66cc27"
  },
  {
    "url": "assets/js/28.8b651b78.js",
    "revision": "49ee61b5dbf931cdc69a020d771de571"
  },
  {
    "url": "assets/js/29.b48666ed.js",
    "revision": "89cd2fe5b6094fbc7be8d52d5a736b89"
  },
  {
    "url": "assets/js/3.6ad63990.js",
    "revision": "0fb627c99923dd5e2e1ccb9a82f5daf1"
  },
  {
    "url": "assets/js/30.e68d4fea.js",
    "revision": "59658b2abc9c8feed47829b74b00c083"
  },
  {
    "url": "assets/js/31.d55135aa.js",
    "revision": "38144efd37ab3cf47c31a696230a8730"
  },
  {
    "url": "assets/js/32.125ed9d4.js",
    "revision": "a33862ea04fcd35f813616d8ac0b5520"
  },
  {
    "url": "assets/js/33.d581791a.js",
    "revision": "911a16a2f77a0884b2575689c6b94abf"
  },
  {
    "url": "assets/js/34.001d140b.js",
    "revision": "7e306f84adbe1226bbfdba87c011c2dc"
  },
  {
    "url": "assets/js/35.6e32cf2f.js",
    "revision": "18f7a6b97300752d10f951dae525be48"
  },
  {
    "url": "assets/js/36.0b005606.js",
    "revision": "95414fcfb5db10b066bf0b9c79227b9e"
  },
  {
    "url": "assets/js/37.164162a7.js",
    "revision": "8d538cad88074c44238d12d17b51cb6f"
  },
  {
    "url": "assets/js/38.45f6a28a.js",
    "revision": "d9b8db0c5c8ce62f372440ccd7bbefb4"
  },
  {
    "url": "assets/js/4.540a521d.js",
    "revision": "bad2c24afe0038b2ac31f22047cf0119"
  },
  {
    "url": "assets/js/5.a9d5a2b6.js",
    "revision": "e3dc2666ded60534c7273c79d5d99526"
  },
  {
    "url": "assets/js/6.87638707.js",
    "revision": "9c5cb43b367c6ac1d835c14c4e07fe80"
  },
  {
    "url": "assets/js/7.b072c58f.js",
    "revision": "d7be9fecc44a5ab562ef4a9956c73421"
  },
  {
    "url": "assets/js/8.ffd358d2.js",
    "revision": "5f2e0e0d12c95c157b791bbbc9d74c5f"
  },
  {
    "url": "assets/js/9.17e9dccd.js",
    "revision": "a3043027f777e980c8f95fd3b8414ed7"
  },
  {
    "url": "assets/js/app.bc39b065.js",
    "revision": "72a70b105a61415f513636adfb18e4c1"
  },
  {
    "url": "guide/consensus-seed.html",
    "revision": "b5cfaa86bb4d9e9a8c7153b7d4886bb8"
  },
  {
    "url": "guide/consensus-sortition.html",
    "revision": "b52c3e57085b877f6a9de082da53f2dd"
  },
  {
    "url": "guide/consensus-state-machine.html",
    "revision": "76a1607a5e29c54d8cef71bc61b35bd0"
  },
  {
    "url": "guide/consensus-without-delegation.html",
    "revision": "27dc94dec62dd9677c3677f100faad34"
  },
  {
    "url": "guide/consensus-zarb.html",
    "revision": "a592bf2fc064ed29d7837f73c6034d7d"
  },
  {
    "url": "guide/learn-account.html",
    "revision": "29bf4d6e2d8cf50291a211b290b420d3"
  },
  {
    "url": "guide/learn-block.html",
    "revision": "6a36a1ee5977b5e7447ed8f0b899689e"
  },
  {
    "url": "guide/learn-certificate.html",
    "revision": "15b53c8d2dd284b65d331aeb9bdb4366"
  },
  {
    "url": "guide/learn-committee.html",
    "revision": "d8bf51bf53d16ebe0f26b9184e5fd7d6"
  },
  {
    "url": "guide/learn-cryptography.html",
    "revision": "c6790234b5ec39c9243c4ea2546e64a9"
  },
  {
    "url": "guide/learn-genesis.html",
    "revision": "6e0f0cbdd2ac10e3bc805055ffe54da8"
  },
  {
    "url": "guide/learn-incentive.html",
    "revision": "ad4250e6b9b593ffaaa88cc49156042b"
  },
  {
    "url": "guide/learn-index.html",
    "revision": "55973c4decb3e2e3943aa0c0d0ee4afa"
  },
  {
    "url": "guide/learn-serialization.html",
    "revision": "89dddce23970308532c938db5f82f318"
  },
  {
    "url": "guide/learn-state-hash.html",
    "revision": "0fdd99925a29dc16f36e2305e6d3d85b"
  },
  {
    "url": "guide/learn-validator.html",
    "revision": "3e0b7849f316178cff81be4eda788ad9"
  },
  {
    "url": "guide/run-ansible.html",
    "revision": "4b45756537c1c6e3acfde32e0023e982"
  },
  {
    "url": "guide/run-become-validator.html",
    "revision": "01b0a00b7b96c5f0380595828d54afa5"
  },
  {
    "url": "guide/run-compile.html",
    "revision": "ecbcb233be62742b26a3f8f1119dbde3"
  },
  {
    "url": "guide/run-docker.html",
    "revision": "25987987c56c9e7f8768a613d3434fa3"
  },
  {
    "url": "guide/run-index.html",
    "revision": "878fbeaddfa7420f54bf0893e4de260f"
  },
  {
    "url": "guide/run-testnet.html",
    "revision": "7b6e411da33c112928968592cb6424bb"
  },
  {
    "url": "guide/transaction-bond.html",
    "revision": "858529b315d1ce018e456c9415b72152"
  },
  {
    "url": "guide/transaction-fee.html",
    "revision": "190b05cd58d876709048d4b6331709fd"
  },
  {
    "url": "guide/transaction-format.html",
    "revision": "b9f0de7d72ad8c037cfe4ae19b50fe46"
  },
  {
    "url": "guide/transaction-mintbase.html",
    "revision": "d186bfc13348718c06bdc9fba3fd7c75"
  },
  {
    "url": "guide/transaction-send.html",
    "revision": "699ae40445ab2e81975107d48200bc57"
  },
  {
    "url": "guide/transaction-sortition.html",
    "revision": "41e796e41c4a5ff2a9cc8cbd887c806c"
  },
  {
    "url": "guide/transaction-stamping.html",
    "revision": "853dc39960312815d6a35ae8cdc63188"
  },
  {
    "url": "index.html",
    "revision": "c18c3d2416915ffea9f83331577bad49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
