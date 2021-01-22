import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("1fc43fc5-d722-4d66-a3a4-37a2f5e24991"), "BlockTest")
    .registerWebComponent({
        elementName: "$element$",
        entryPoint: "./BlockTest.jsx"
    })
    .withDefinition({
        title: "BlockTest", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "BlockTest", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "BlockTest", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("6b77a45a-c536-4b94-87e2-e982b822731f"), "BlockTest.settings")
.registerWebComponent({
    elementName: "$element$-settings",
    entryPoint: "./BlockTestSettings.jsx"
})