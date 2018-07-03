cd ../components
mkdir $1
cd $1
touch index.tsx
touch index.scss
echo "import * as React from 'react';\nimport {Component} from 'react';\n\nimport './index.scss';\n\ninterface IPropType {\n}\n\ninterface IStateType {\n}\n\nexport default class $1 extends Component<IPropType, IStateType> {\n  public render() {\n    return (\n      <div> this is $1!!!! </div>\n    );\n  }\n}" >> index.tsx