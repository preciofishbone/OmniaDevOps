import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("acd8c639-1d84-420f-8943-c95b5cad2894"), "Omnia.Breaking.Worker")
    .registerService({ description: "Description of Omnia.Breaking.Worker" })
    .AsWorker();
    
   