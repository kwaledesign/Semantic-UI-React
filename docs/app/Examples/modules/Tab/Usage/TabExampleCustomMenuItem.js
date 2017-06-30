import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: <Menu.Item>Messages<Label>15</Label></Menu.Item>,
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
  },
]

const TabExampleCustomMenuItem = () => (
  <Tab panes={panes} />
)

export default TabExampleCustomMenuItem
