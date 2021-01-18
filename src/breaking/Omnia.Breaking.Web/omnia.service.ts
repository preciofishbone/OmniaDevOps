import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("5d18a2ba-13d2-47fc-b77f-c24024c5364b"), "Omnia.Breaking.Web")
    .registerService({ description: "Description of Omnia.Breaking.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("a66fa691-6b78-4768-a6df-70f4145b5101"),
                minChunks: 2
            }
        }
    });
    
   