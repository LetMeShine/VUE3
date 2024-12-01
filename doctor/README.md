# doctor

## 运行的时候需要按照VSCode扩展Vue - Official，这样在引入组件的时候就不会编译报错了

## 在env.d.ts添加一下代码
```js
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
```

## 功能模块

### 用户管理模块

1. 用户加密逻辑，用户的增删改查
2. 角色，给用户配置权限功能的 （低）
3. 药材管理模块（药材的属性、还有药材的图片）

| 四性 | 属性名 |
|----|----|
| 寒性 | 药材多具有清热泻火、凉血解毒等作用，适用于热性病症。如蒲公英、金银花等 |
| 热性 | 药材多具有温里散寒、补火助阳等作用，适用于寒性病症。如当归、陈皮等 |
| 温性 | 药材多具有温中散寒、补气养血等作用，性质介于寒性和热性之间。如细辛、人参等 |
| 凉性 | 药材多具有清热生津、凉血解毒等作用，但凉性较寒性为轻。与寒性的药材通常是相同的，如连翘、栀子等 |

| 五味 | 属性名 |
|----|----|
| 酸味 | 能收、能涩，具有收敛固涩的作用。如五味子、乌梅等。|
| 苦味 | 能泄、能燥、能坚，具有清热泻火、燥湿坚阴等作用。如大黄、黄连等。|
| 甘味 | 能补、能和、能缓，具有补益和中、调和药性及缓急止痛的作用。如党参、黄芪等。|
| 辛味 | 能散、能行，具有发散风寒、行气活血等作用。如麻黄、桂枝等。|
| 咸味 | 能下、能软，具有泻下通便、软坚散结等作用。如芒硝、海藻等。|

| 阴阳五行 | 属性名 |
|----|----|
| 木性药 | 多具有宣发之功，可补肝益肾养心泻脾抑肺。如桂枝、蜀椒等。|
| 火性药 | 多具有温煦之功，可补心益脾养肾泻肺抑肝。如大黄、代赭石等。|
| 土性药 | 多具有运化之功，可补脾益肺养心泻肾抑肝。如人参、牛脾等。|
| 金性药 | 多具有敛固之功，可补肺益肾养脾泻肝抑心。如五味子、薯蓣等。|
| 水性药（有时不单独列出，但可融入其他属性中） | 多具有滋润之功，与肾、膀胱等脏腑相关。|

4. 穴位库（穴位录入）
5. 症状库、症状录入
6. 疗效
7. 病证对应的方子（药材、用量）


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
