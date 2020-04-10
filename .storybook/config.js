import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "./decorator"

addDecorator(themeDecorator);
