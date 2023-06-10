import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button, Text } from '@mantine/core';
import { Spotlight } from './Spotlight';

export default { title: 'Spotlight' };

const largeActionsList = Array(20)
  .fill(0)
  .map((_, index) => (
    <Spotlight.Action
      key={index}
      onClick={() => console.log(`action ${index}`)}
      description={`Action ${index} description`}
      label={`Action ${index} label`}
      leftSection={<IconSearch stroke={1.5} size={20} />}
      rightSection={
        <Text size="xs" span>
          Ctrl + L
        </Text>
      }
    />
  ));

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Spotlight>
        <Spotlight.Search
          placeholder="Search something..."
          leftSection={<IconSearch stroke={1.5} size={20} />}
        />

        <Spotlight.ActionsList>
          <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          {largeActionsList}
        </Spotlight.ActionsList>

        <Spotlight.Footer>This is footer</Spotlight.Footer>
      </Spotlight>

      <Button onClick={() => Spotlight.open()}>Open spotlight</Button>
    </div>
  );
}