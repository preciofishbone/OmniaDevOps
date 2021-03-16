using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace Omnia.Breaking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ValuesController : ControllerBase
    {

        private static byte[] _bytes;

        // GET: api/<ValuesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var inputFileName = Path.Combine(Environment.CurrentDirectory, "test.js");

            if (_bytes.IsNull())
            {
                _bytes = await System.IO.File.ReadAllBytesAsync(inputFileName);
            }


            Response.Headers.Add("Content-Encoding", new[] { "br" });
            //using (FileStream input = System.IO.File.ReadAllBytes(inputFileName))
            //{

            return new FileContentResult(_bytes, "application/x-javascript");
            //return new FileStreamResult(new MemoryStream(_bytes), "application/x-javascript");
            // }

            //return new string[] { "value1", "value2" };


        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
