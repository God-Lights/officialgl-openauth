import * as React from 'react';

interface CodeSenderProps {
  code: string;
}

export function CodeSender({ code }: CodeSenderProps) {
  return (
    <div>
      <h1>GL: code is {code}</h1>
    </div>
  );
}

export default CodeSender