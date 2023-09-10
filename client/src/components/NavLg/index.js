import { Menu, Segment } from 'semantic-ui-react';

export default function NavLg({renderLinks}) {
    return (
      <Segment inverted attached borderless size='mini'>
        <Menu inverted secondary borderless>
          {renderLinks()}
        </Menu>
      </Segment>
    )
  };