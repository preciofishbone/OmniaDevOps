using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Omnia.Breaking.Tests
{
    class Program
    {
        static async Task Main(string[] args)
        {

            //var local = "https://localhost:44365/api/";
            var cloud = "https://5d18a2ba13d247fcb77fc24024c5364b-omniadevops.omniatestcloud.net/api/";

            Console.WriteLine("Sleeping 15 seconds before running");
            Thread.Sleep(15000);

            Console.WriteLine($"Trying to get values from {cloud}values");

            HttpClientHandler handler = new HttpClientHandler()
            {
                AutomaticDecompression = DecompressionMethods.Brotli | DecompressionMethods.GZip | DecompressionMethods.Deflate
            };

            var nugetClient = new HttpClient(handler);
            nugetClient.DefaultRequestHeaders.Add("Accept", "application/json");
            nugetClient.BaseAddress = new Uri(cloud);
            var resp = await nugetClient.GetAsync("values");

            if (resp.StatusCode != HttpStatusCode.OK)
            {
                Console.WriteLine($"Error accessing {cloud}values, this could be a breaking change");
                Environment.Exit(32);
            }
            else {
                Console.WriteLine($"Success accessing {cloud}values");
            }

        }
    }
}
