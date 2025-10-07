# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="zap-cdk.App"></a>

The main application construct that aggregates all child constructs and synthesizes them into a single YAML file.

#### Initializers <a name="Initializers" id="zap-cdk.App.Initializer"></a>

```typescript
import { App } from 'zap-cdk'

new App()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.App.synth">synth</a></code> | Synthesizes all child constructs into a single YAML file. |

---

##### `toString` <a name="toString" id="zap-cdk.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="zap-cdk.App.synth"></a>

```typescript
public synth(outputDir?: string, fileName?: string): void
```

Synthesizes all child constructs into a single YAML file.

Each construct must implement a `synth()` method.

###### `outputDir`<sup>Optional</sup> <a name="outputDir" id="zap-cdk.App.synth.parameter.outputDir"></a>

- *Type:* string

---

###### `fileName`<sup>Optional</sup> <a name="fileName" id="zap-cdk.App.synth.parameter.fileName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.App.isConstruct"></a>

```typescript
import { App } from 'zap-cdk'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---





