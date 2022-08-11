import Vue from 'vue';

const loadPlugins = (plugins = []) => {

    if (plugins.length > 0) {
        for (const plugin of plugins) {
            Vue.use(plugin);
        }
    } else {
        throw new Error(`No plugin(s) found`);
    }

}

export default loadPlugins;