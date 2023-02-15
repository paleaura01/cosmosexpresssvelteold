<script>
    import { useState } from "svelte";
  
    const SubscribeButton = () => {
      const [showPopout, setShowPopout] = useState(false);
      const platforms = {
        Twitter: "https://twitter.com/Cosmos_Express",
        Telegram: "https://t.me/Cosmos_Express",
        Discord: "https://discord.gg/4xRQ5JBr",
        Reddit: "https://www.reddit.com/r/Cosmos_Express/",
        Email: "cosmos.express@gmx.com",
      };
  
      const handleSubscribe = (platform) => {
        if (platform === "Email") {
          navigator.clipboard.writeText(platforms[platform]).then(() => {
            alert("Email copied to your clipboard!");
          });
        } else {
          window.open(platforms[platform]);
        }
        setShowPopout(false);
      };
  
      return (
        <div>
          <button
            class="flex items-center px-4 py-2 font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-3xl text-md"
            on:click={() => setShowPopout(true)}
          >
            Subscribe
          </button>
          {showPopout && (
            <div class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-75">
              <div class="flex items-center justify-center h-full p-8 rounded-lg shadow-lg">
                <div class="relative flex flex-col p-12 bg-gray-100 bg-opacity-50 rounded-lg dark:bg-opacity-50 dark:bg-slate-900">
                  {Object.keys(platforms).map((platform) => (
                    <button
                      key={platform}
                      class="w-64 p-4 m-4 font-bold text-gray-400 bg-gray-100 rounded-lg hover:bg-sky-500 hover:text-white"
                      on:click={() => handleSubscribe(platform)}
                    >
                      {platform}
                    </button>
                  ))}
                  <div class="absolute top-0 right-0 m-6">
                    <button
                      class="p-1 font-bold text-white bg-red-500 border-white rounded-lg hover:bg-red-600"
                      on:click={() => setShowPopout(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
  </script>
  
  <div>
    <SubscribeButton />
  </div>