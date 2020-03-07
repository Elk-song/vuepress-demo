### Vue规范
1. 公用子组件封装遵循可复用； 页面子组件遵循单一具体功能；

2. 视图层尽可能薄，不要有过多逻辑判断、数据筛选等；

3. 监听watch尽可能少用；

4. 一个页面内同一操作至多发送一个相同请求；

5. 子父传值emit, 父子传值prop;

6. 父子传值为单向，不允许子组件内修改父组件的传值，且prop 的定义应该尽量详细，至少需要指定其类型；

7. 模板内循环元素绑定key值；

8. 永远不要把 v-if 和 v-for 同时用在同一个元素上；

9. 单个组件绑定name值, 防止keep-alive失效；

10. 模块书写时备注功能；

11. 组件名应该始终是多个单词的；

12. 单文件组件文件的大小写：my-component.vue/ MyComponent.vue；

13. 基础组件名： 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V；

    ```
    components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue
    ```

14. 单例组件（每个页面只使用一次，不接受任何prop）： 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性；

    ```
    components/
    |- TheHeading.vue
    |- TheSidebar.vue
    ```

15. 紧密耦合组件名： 和父组件紧密耦合的子组件应该以父组件名作为前缀命名；

    ```
    components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue
    ```

16. 组件名种的单词顺序： 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾；

    ```
    components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
    |- SearchInputQuery.vue
    |- SearchInputExcludeGlob.vue
    |- SettingsCheckboxTerms.vue
    |- SettingsCheckboxLaunchOnStartup.vue
    ```

17. 在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做；

    ```
    <!-- 在单文件组件、字符串模板和 JSX 中 -->
    <MyComponent/>
    <!-- 在 DOM 模板中 -->
    <my-component></my-component>
    ```

18. 组件名应该倾向于完整单词而不是缩写；

19. 指令缩写；

