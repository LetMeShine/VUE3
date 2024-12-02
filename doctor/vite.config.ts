import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import globalStyle from '@originjs/vite-plugin-global-style';
// 按需引入的插件配置
// import Components from 'unplugin-vue-components/vite';
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        globalStyle({
            sourcePath: './src/assets/css', // 你的公共less文件目录  
            lessEnabled: true // 启用less解析  
        }),
        // Components({
        //     resolvers: [
        //         AntDesignVueResolver({
        //             importStyle: false, // css in js
        //         }),
        //     ],
        // }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                // 这里可以配置less的编译选项，比如全局变量等  
                // globalVars: { hack: `true; @import "${path.resolve(__dirname, './src/assets/css/variables.less')}";` },  
                // 或者使用 additionalData 来引入全局样式文件（注意：这种方式可能不适用于所有情况，特别是当less文件中包含变量覆盖时）  
                // additionalData: `@import "./src/assets/css/main.less";`
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
