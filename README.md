## Пояснения к работе

Разделение логики на компоненты. Контейнер часов отвечает за данные и отрисовку компонента "часы". Сами часы состоят из трех компонентов (аналоговые и цифровые часы + выбор часового пояса). Данные хранятся в хранилище, выбор пал на редакс тулкит (меньше шаблонного кода). В редаксе данные получаются путем обращения к серверу. Затем эти данные возвращаются в компонент и передаются дочерним компонентам. Часы получают данные и отрисовывают свое дефолтное состояние, при желании можно выбрать часовой пояс и часы перерисуются под заданный пояс. Использование гридов и цикла для часов позволяет тонко настроить в двух местах логику отрисовки. Переменные в стилях часов для быстрой правки стрелок при желании. Штрихи аналоговых часов рисуются в виде прямых под разными углами, а после поверх цвета фона круг. Каждая пара штрихов может иметь свои стили. Дочерние компоненты часов логики не имеют, а только лишь отрисовывают, вся логика в родителе.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
