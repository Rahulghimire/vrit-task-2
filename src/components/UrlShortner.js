import React from "react";
import axios from "axios";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = React.useState("");
  const [customUrl, setCustomUrl] = React.useState("");
  const [data, setData] = React.useState(null);

  //Actually should be in env file and should be ignored in gitignorefile
  const apiKey = "aOMZquUWHTONbKvmbeJdwrz58JC5FVKMhoseuMSDpvFkPlQe9v0ozFalrvhN";

  //Actually should be in env file and should be ignored in gitignorefile
  const url = "https://api.tinyurl.com/create";


  const handleLongUrl = (e) => {
    setLongUrl(e.target.value);
  };

  const handleCustomUrl = (e) => {
    setCustomUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(longUrl||customUrl){
        axios
        .post(
          url,
          { url: longUrl||customUrl },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        )
        .then((response) => {
          const data = response.data?.data;
          if (data) {
            setData(data);
            setLongUrl("")
            setCustomUrl("");
            //to show this notification can be shown
            alert("Success")
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
   
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col">
        <div className={`${data&&"hidden"}`}>
        <div>
          <input
            type="text"
            name="xxx"
            value={longUrl}
            onChange={handleLongUrl}
            placeholder="Enter long url"
      
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-2">
          <input
            type="text"
            name="xxx"
            value={customUrl}
            onChange={handleCustomUrl}
            placeholder="Enter custom url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        </div>
        {data && 
        <div className="flex flex-col gap-x-4 gap-y-2">
            <div className="text-sm font-Poppins">
                Your URL has been shortened
            </div>
            <div className="text-sm font-Poppins">
            Long URL: {data?.url}
            </div>
            <div className="flex gap-x-2 text-sm font-Poppins">
            Short URL: <p className="font-bold">{data?.tiny_url}</p>
            </div>
            <div className="flex gap-x-2 items-center">
                <div className="whitespace-nowrap text-sm font-Poppins">
                    Shorten Another URL
                </div>
                <input
            type="text"
            name="xxx"
            value={longUrl}
            onChange={handleLongUrl}
            placeholder="Enter Another Long URL"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
         
        </div>

           </div>
           }
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Shorten It
        </button>
        {data &&
        <div className="text-[green]">
            Thank you for using URL Shortner
        </div>
        }
      </form>
    </>
  );
};

export default UrlShortner;
