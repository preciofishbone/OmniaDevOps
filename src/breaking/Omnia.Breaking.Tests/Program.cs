using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Omnia.Breaking.Tests
{
    class Program
    {
        static async Task Main(string[] args)
        {


            HttpClientHandler handler = new HttpClientHandler()
            {
                AutomaticDecompression = DecompressionMethods.Brotli | DecompressionMethods.GZip | DecompressionMethods.Deflate
            };

            //var local = "https://localhost:44365/api/";
            var cloud = "https://5d18a2ba13d247fcb77fc24024c5364b-omniadevops.omniatestcloud.net/api/";

            var nugetClient = new HttpClient(handler);
            nugetClient.DefaultRequestHeaders.Add("Accept", "application/json");
            nugetClient.BaseAddress = new Uri(cloud);
            var resp = nugetClient.GetAsync("values").Result;

            if (resp.StatusCode != HttpStatusCode.OK)
            {

            }

        }
    }
}
