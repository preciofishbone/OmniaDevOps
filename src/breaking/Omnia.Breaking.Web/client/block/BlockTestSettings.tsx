import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsWriter } from '@omnia/fx/ux';
import { BlockTestSettingsStyles } from './BlockTestSettings.css';
import { IBlockSettingsWriter } from '@omnia/fx-models';


export interface BlockTestBlockSettings{
    title: string;
}

export const BlockConfigurationFactory = {
    defaultSettings(): BlockTestBlockSettings {
        return {
            title: "my block title"
        }
    }
}


@Component
export default class BlockTestSettings extends VueComponentBase implements IWebComponentInstance {
    
    private BlockTestSettingsClasses = StyleFlow.use(BlockTestSettingsStyles);
    
    @BlockSettingsWriter<BlockTestBlockSettings>({
        defaultValue: BlockConfigurationFactory.defaultSettings()
    })
    protected settings: IBlockSettingsWriter<BlockTestBlockSettings>;

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <v-card flat>
                <v-card-text>
                    <v-text-field
                        filled
                        v-model={this.settings.title}
                        label='Title'></v-text-field>
                </v-card-text>
            </v-card>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, BlockTestSettings);
});