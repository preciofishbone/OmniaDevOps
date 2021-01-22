import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { BlockTestStyles } from './BlockTest.css';
import { BlockConfigurationFactory, BlockTestBlockSettings } from './BlockTestSettings';

@Component
export default class BlockTest extends VueComponentBase implements IWebComponentInstance {
    

    private BlockTestClasses = StyleFlow.use(BlockTestStyles);

    @BlockSettingsReader<BlockTestBlockSettings>({
        defaultValue: BlockConfigurationFactory.defaultSettings(),
        editElement: "$element$-settings"
    })
    protected settings: BlockTestBlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.BlockTestClasses.container}>
                {this.settings.title}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, BlockTest);
});