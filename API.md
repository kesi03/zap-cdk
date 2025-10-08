# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveScanConfig <a name="ActiveScanConfig" id="zap-cdk.ActiveScanConfig"></a>

Class representing the active scan configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanConfig.Initializer"></a>

```typescript
import { ActiveScanConfig } from 'zap-cdk'

new ActiveScanConfig(scope: Construct, id: string, props: IActiveScanConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ActiveScanConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ActiveScanConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IActiveScanConfigProps">IActiveScanConfigProps</a></code> | - The properties of the active scan configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ActiveScanConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ActiveScanConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ActiveScanConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IActiveScanConfigProps">IActiveScanConfigProps</a>

The properties of the active scan configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ActiveScanConfig.toYaml">toYaml</a></code> | Converts the active scan configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ActiveScanConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ActiveScanConfig.toYaml"></a>

```typescript
public toYaml(): IActiveScanConfig
```

Converts the active scan configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ActiveScanConfig.isConstruct"></a>

```typescript
import { ActiveScanConfig } from 'zap-cdk'

ActiveScanConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ActiveScanConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ActiveScanConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a></code> | The active scan configuration properties. |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ActiveScanConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ActiveScanConfig.property.config"></a>

```typescript
public readonly config: IActiveScanConfig;
```

- *Type:* <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>

The active scan configuration properties.

---


### ActiveScanJob <a name="ActiveScanJob" id="zap-cdk.ActiveScanJob"></a>

Class representing an active scan job.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanJob.Initializer"></a>

```typescript
import { ActiveScanJob } from 'zap-cdk'

new ActiveScanJob(scope: Construct, id: string, props: IActiveScanJob)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ActiveScanJob.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ActiveScanJob.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IActiveScanJob">IActiveScanJob</a></code> | - The properties of the active scan job. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ActiveScanJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ActiveScanJob.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ActiveScanJob.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IActiveScanJob">IActiveScanJob</a>

The properties of the active scan job.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ActiveScanJob.toYaml">toYaml</a></code> | Converts the active scan job to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ActiveScanJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ActiveScanJob.toYaml"></a>

```typescript
public toYaml(): IActiveScanJob
```

Converts the active scan job to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ActiveScanJob.isConstruct"></a>

```typescript
import { ActiveScanJob } from 'zap-cdk'

ActiveScanJob.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ActiveScanJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ActiveScanJob.property.job">job</a></code> | <code><a href="#zap-cdk.IActiveScanJob">IActiveScanJob</a></code> | The active scan job properties. |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ActiveScanJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `job`<sup>Required</sup> <a name="job" id="zap-cdk.ActiveScanJob.property.job"></a>

```typescript
public readonly job: IActiveScanJob;
```

- *Type:* <a href="#zap-cdk.IActiveScanJob">IActiveScanJob</a>

The active scan job properties.

---


### ActiveScanPolicyConfig <a name="ActiveScanPolicyConfig" id="zap-cdk.ActiveScanPolicyConfig"></a>

Class representing the active scan policy configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanPolicyConfig.Initializer"></a>

```typescript
import { ActiveScanPolicyConfig } from 'zap-cdk'

new ActiveScanPolicyConfig(scope: Construct, id: string, props: IActiveScanPolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyProps">IActiveScanPolicyProps</a></code> | - The properties of the active scan policy configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ActiveScanPolicyConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IActiveScanPolicyProps">IActiveScanPolicyProps</a>

The properties of the active scan policy configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.toYaml">toYaml</a></code> | Converts the active scan policy configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ActiveScanPolicyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ActiveScanPolicyConfig.toYaml"></a>

```typescript
public toYaml(): IActiveScanPolicy
```

Converts the active scan policy configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ActiveScanPolicyConfig.isConstruct"></a>

```typescript
import { ActiveScanPolicyConfig } from 'zap-cdk'

ActiveScanPolicyConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ActiveScanPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ActiveScanPolicyConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ActiveScanPolicyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ActiveScanPolicyConfig.property.config"></a>

```typescript
public readonly config: IActiveScanPolicy;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>

---


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


### DelayConfig <a name="DelayConfig" id="zap-cdk.DelayConfig"></a>

Class representing the delay configuration.

#### Initializers <a name="Initializers" id="zap-cdk.DelayConfig.Initializer"></a>

```typescript
import { DelayConfig } from 'zap-cdk'

new DelayConfig(scope: Construct, id: string, props: IDelayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DelayConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.DelayConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.DelayConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IDelayProps">IDelayProps</a></code> | - The properties of the delay configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.DelayConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.DelayConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.DelayConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IDelayProps">IDelayProps</a>

The properties of the delay configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.DelayConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.DelayConfig.toYaml">toYaml</a></code> | Converts the delay configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.DelayConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.DelayConfig.toYaml"></a>

```typescript
public toYaml(): IDelay
```

Converts the delay configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.DelayConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.DelayConfig.isConstruct"></a>

```typescript
import { DelayConfig } from 'zap-cdk'

DelayConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.DelayConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DelayConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.DelayConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IDelay">IDelay</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.DelayConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.DelayConfig.property.config"></a>

```typescript
public readonly config: IDelay;
```

- *Type:* <a href="#zap-cdk.IDelay">IDelay</a>

---


### EnvironmentConfig <a name="EnvironmentConfig" id="zap-cdk.EnvironmentConfig"></a>

Class representing the environment configuration.

#### Initializers <a name="Initializers" id="zap-cdk.EnvironmentConfig.Initializer"></a>

```typescript
import { EnvironmentConfig } from 'zap-cdk'

new EnvironmentConfig(scope: Construct, id: string, props: IEnvironmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.EnvironmentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.EnvironmentConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.EnvironmentConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IEnvironmentProps">IEnvironmentProps</a></code> | - The properties of the environment configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.EnvironmentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.EnvironmentConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.EnvironmentConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IEnvironmentProps">IEnvironmentProps</a>

The properties of the environment configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.EnvironmentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.EnvironmentConfig.toYaml">toYaml</a></code> | Converts the environment configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.EnvironmentConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.EnvironmentConfig.toYaml"></a>

```typescript
public toYaml(): IEnvironment
```

Converts the environment configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.EnvironmentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.EnvironmentConfig.isConstruct"></a>

```typescript
import { EnvironmentConfig } from 'zap-cdk'

EnvironmentConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.EnvironmentConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.EnvironmentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.EnvironmentConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IEnvironment">IEnvironment</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.EnvironmentConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.EnvironmentConfig.property.config"></a>

```typescript
public readonly config: IEnvironment;
```

- *Type:* <a href="#zap-cdk.IEnvironment">IEnvironment</a>

---


### ExitStatusConfig <a name="ExitStatusConfig" id="zap-cdk.ExitStatusConfig"></a>

Class representing the exit status configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ExitStatusConfig.Initializer"></a>

```typescript
import { ExitStatusConfig } from 'zap-cdk'

new ExitStatusConfig(scope: Construct, id: string, props: IExitStatusProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatusConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ExitStatusConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ExitStatusConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IExitStatusProps">IExitStatusProps</a></code> | - The properties of the exit status configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ExitStatusConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ExitStatusConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ExitStatusConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IExitStatusProps">IExitStatusProps</a>

The properties of the exit status configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ExitStatusConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ExitStatusConfig.toYaml">toYaml</a></code> | Converts the exit status configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ExitStatusConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ExitStatusConfig.toYaml"></a>

```typescript
public toYaml(): IExitStatus
```

Converts the exit status configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ExitStatusConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ExitStatusConfig.isConstruct"></a>

```typescript
import { ExitStatusConfig } from 'zap-cdk'

ExitStatusConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ExitStatusConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatusConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ExitStatusConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IExitStatus">IExitStatus</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ExitStatusConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ExitStatusConfig.property.config"></a>

```typescript
public readonly config: IExitStatus;
```

- *Type:* <a href="#zap-cdk.IExitStatus">IExitStatus</a>

---


### ExportConfig <a name="ExportConfig" id="zap-cdk.ExportConfig"></a>

Class representing the export configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ExportConfig.Initializer"></a>

```typescript
import { ExportConfig } from 'zap-cdk'

new ExportConfig(scope: Construct, id: string, props: IExportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ExportConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ExportConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IExportProps">IExportProps</a></code> | - The properties of the export configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ExportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ExportConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ExportConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IExportProps">IExportProps</a>

The properties of the export configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ExportConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ExportConfig.toYaml">toYaml</a></code> | Converts the export configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ExportConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ExportConfig.toYaml"></a>

```typescript
public toYaml(): IExport
```

Converts the export configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ExportConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ExportConfig.isConstruct"></a>

```typescript
import { ExportConfig } from 'zap-cdk'

ExportConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ExportConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ExportConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IExport">IExport</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ExportConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ExportConfig.property.config"></a>

```typescript
public readonly config: IExport;
```

- *Type:* <a href="#zap-cdk.IExport">IExport</a>

---


### GraphQLConfig <a name="GraphQLConfig" id="zap-cdk.GraphQLConfig"></a>

Class representing the GraphQL configuration.

#### Initializers <a name="Initializers" id="zap-cdk.GraphQLConfig.Initializer"></a>

```typescript
import { GraphQLConfig } from 'zap-cdk'

new GraphQLConfig(scope: Construct, id: string, props: IGraphQLProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.GraphQLConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.GraphQLConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.GraphQLConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IGraphQLProps">IGraphQLProps</a></code> | - The properties of the GraphQL configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.GraphQLConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.GraphQLConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.GraphQLConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IGraphQLProps">IGraphQLProps</a>

The properties of the GraphQL configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.GraphQLConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.GraphQLConfig.toYaml">toYaml</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="zap-cdk.GraphQLConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.GraphQLConfig.toYaml"></a>

```typescript
public toYaml(): IGraphQL
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.GraphQLConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.GraphQLConfig.isConstruct"></a>

```typescript
import { GraphQLConfig } from 'zap-cdk'

GraphQLConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.GraphQLConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.GraphQLConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.GraphQLConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IGraphQL">IGraphQL</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.GraphQLConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.GraphQLConfig.property.config"></a>

```typescript
public readonly config: IGraphQL;
```

- *Type:* <a href="#zap-cdk.IGraphQL">IGraphQL</a>

---


### ImportConfig <a name="ImportConfig" id="zap-cdk.ImportConfig"></a>

Class representing the import configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ImportConfig.Initializer"></a>

```typescript
import { ImportConfig } from 'zap-cdk'

new ImportConfig(scope: Construct, id: string, props: IImportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ImportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ImportConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ImportConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IImportProps">IImportProps</a></code> | - The properties of the import configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ImportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ImportConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ImportConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IImportProps">IImportProps</a>

The properties of the import configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ImportConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ImportConfig.toYaml">toYaml</a></code> | Converts the import configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ImportConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ImportConfig.toYaml"></a>

```typescript
public toYaml(): IImport
```

Converts the import configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ImportConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ImportConfig.isConstruct"></a>

```typescript
import { ImportConfig } from 'zap-cdk'

ImportConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ImportConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ImportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ImportConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IImport">IImport</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ImportConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ImportConfig.property.config"></a>

```typescript
public readonly config: IImport;
```

- *Type:* <a href="#zap-cdk.IImport">IImport</a>

---


### OpenAPIConfig <a name="OpenAPIConfig" id="zap-cdk.OpenAPIConfig"></a>

Class representing the OpenAPI configuration.

#### Initializers <a name="Initializers" id="zap-cdk.OpenAPIConfig.Initializer"></a>

```typescript
import { OpenAPIConfig } from 'zap-cdk'

new OpenAPIConfig(scope: Construct, id: string, props: IOpenAPIProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.OpenAPIConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.OpenAPIConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.OpenAPIConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IOpenAPIProps">IOpenAPIProps</a></code> | - The properties of the OpenAPI configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.OpenAPIConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.OpenAPIConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.OpenAPIConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IOpenAPIProps">IOpenAPIProps</a>

The properties of the OpenAPI configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.OpenAPIConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.OpenAPIConfig.toYaml">toYaml</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="zap-cdk.OpenAPIConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.OpenAPIConfig.toYaml"></a>

```typescript
public toYaml(): IOpenAPI
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.OpenAPIConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.OpenAPIConfig.isConstruct"></a>

```typescript
import { OpenAPIConfig } from 'zap-cdk'

OpenAPIConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.OpenAPIConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.OpenAPIConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.OpenAPIConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IOpenAPI">IOpenAPI</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.OpenAPIConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.OpenAPIConfig.property.config"></a>

```typescript
public readonly config: IOpenAPI;
```

- *Type:* <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>

---


### PassiveScanConfig <a name="PassiveScanConfig" id="zap-cdk.PassiveScanConfig"></a>

Class representing the passive scan configuration.

#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanConfig.Initializer"></a>

```typescript
import { PassiveScanConfig } from 'zap-cdk'

new PassiveScanConfig(scope: Construct, id: string, props: IPassiveScanConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.PassiveScanConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.PassiveScanConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IPassiveScanConfigProps">IPassiveScanConfigProps</a></code> | - The properties of the passive scan configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.PassiveScanConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.PassiveScanConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.PassiveScanConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanConfigProps">IPassiveScanConfigProps</a>

The properties of the passive scan configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.PassiveScanConfig.toYaml">toYaml</a></code> | Converts the passive scan configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.PassiveScanConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.PassiveScanConfig.toYaml"></a>

```typescript
public toYaml(): IPassiveScanConfig
```

Converts the passive scan configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.PassiveScanConfig.isConstruct"></a>

```typescript
import { PassiveScanConfig } from 'zap-cdk'

PassiveScanConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.PassiveScanConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.PassiveScanConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.PassiveScanConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.PassiveScanConfig.property.config"></a>

```typescript
public readonly config: IPassiveScanConfig;
```

- *Type:* <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>

---


### PassiveScanWaitConfig <a name="PassiveScanWaitConfig" id="zap-cdk.PassiveScanWaitConfig"></a>

Class representing the passive scan wait configuration.

#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanWaitConfig.Initializer"></a>

```typescript
import { PassiveScanWaitConfig } from 'zap-cdk'

new PassiveScanWaitConfig(scope: Construct, id: string, props: IPassiveScanWaitProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IPassiveScanWaitProps">IPassiveScanWaitProps</a></code> | - The properties of the passive scan wait configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.PassiveScanWaitConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.PassiveScanWaitConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.PassiveScanWaitConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanWaitProps">IPassiveScanWaitProps</a>

The properties of the passive scan wait configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.toYaml">toYaml</a></code> | Converts the passive scan wait configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.PassiveScanWaitConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.PassiveScanWaitConfig.toYaml"></a>

```typescript
public toYaml(): IPassiveScanWait
```

Converts the passive scan wait configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.PassiveScanWaitConfig.isConstruct"></a>

```typescript
import { PassiveScanWaitConfig } from 'zap-cdk'

PassiveScanWaitConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.PassiveScanWaitConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.PassiveScanWaitConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.PassiveScanWaitConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.PassiveScanWaitConfig.property.config"></a>

```typescript
public readonly config: IPassiveScanWait;
```

- *Type:* <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a>

---


### PostmanConfig <a name="PostmanConfig" id="zap-cdk.PostmanConfig"></a>

Class representing the Postman configuration.

#### Initializers <a name="Initializers" id="zap-cdk.PostmanConfig.Initializer"></a>

```typescript
import { PostmanConfig } from 'zap-cdk'

new PostmanConfig(scope: Construct, id: string, props: IPostmanProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PostmanConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.PostmanConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.PostmanConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IPostmanProps">IPostmanProps</a></code> | - The properties of the Postman configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.PostmanConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.PostmanConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.PostmanConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IPostmanProps">IPostmanProps</a>

The properties of the Postman configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PostmanConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.PostmanConfig.toYaml">toYaml</a></code> | Converts the Postman configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.PostmanConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.PostmanConfig.toYaml"></a>

```typescript
public toYaml(): IPostman
```

Converts the Postman configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PostmanConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.PostmanConfig.isConstruct"></a>

```typescript
import { PostmanConfig } from 'zap-cdk'

PostmanConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.PostmanConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PostmanConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.PostmanConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IPostman">IPostman</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.PostmanConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.PostmanConfig.property.config"></a>

```typescript
public readonly config: IPostman;
```

- *Type:* <a href="#zap-cdk.IPostman">IPostman</a>

---


### ReplacerConfig <a name="ReplacerConfig" id="zap-cdk.ReplacerConfig"></a>

Class representing the replacer configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ReplacerConfig.Initializer"></a>

```typescript
import { ReplacerConfig } from 'zap-cdk'

new ReplacerConfig(scope: Construct, id: string, props: IReplacerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReplacerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ReplacerConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ReplacerConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IReplacerProps">IReplacerProps</a></code> | - The properties of the replacer configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ReplacerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ReplacerConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ReplacerConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IReplacerProps">IReplacerProps</a>

The properties of the replacer configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ReplacerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ReplacerConfig.toYaml">toYaml</a></code> | Converts the replacer configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ReplacerConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ReplacerConfig.toYaml"></a>

```typescript
public toYaml(): IReplacer
```

Converts the replacer configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ReplacerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ReplacerConfig.isConstruct"></a>

```typescript
import { ReplacerConfig } from 'zap-cdk'

ReplacerConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ReplacerConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReplacerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ReplacerConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IReplacer">IReplacer</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ReplacerConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ReplacerConfig.property.config"></a>

```typescript
public readonly config: IReplacer;
```

- *Type:* <a href="#zap-cdk.IReplacer">IReplacer</a>

---


### ReportConfig <a name="ReportConfig" id="zap-cdk.ReportConfig"></a>

Class representing the report configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ReportConfig.Initializer"></a>

```typescript
import { ReportConfig } from 'zap-cdk'

new ReportConfig(scope: Construct, id: string, props: IReportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ReportConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ReportConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IReportProps">IReportProps</a></code> | - The properties of the report configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ReportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ReportConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ReportConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IReportProps">IReportProps</a>

The properties of the report configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ReportConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ReportConfig.toYaml">toYaml</a></code> | Converts the report configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ReportConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ReportConfig.toYaml"></a>

```typescript
public toYaml(): IReport
```

Converts the report configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ReportConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ReportConfig.isConstruct"></a>

```typescript
import { ReportConfig } from 'zap-cdk'

ReportConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ReportConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ReportConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IReport">IReport</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ReportConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ReportConfig.property.config"></a>

```typescript
public readonly config: IReport;
```

- *Type:* <a href="#zap-cdk.IReport">IReport</a>

---


### RequestorConfig <a name="RequestorConfig" id="zap-cdk.RequestorConfig"></a>

Class representing the requestor configuration.

#### Initializers <a name="Initializers" id="zap-cdk.RequestorConfig.Initializer"></a>

```typescript
import { RequestorConfig } from 'zap-cdk'

new RequestorConfig(scope: Construct, id: string, props: IRequestorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.RequestorConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.RequestorConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.RequestorConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IRequestorProps">IRequestorProps</a></code> | - The properties of the requestor configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.RequestorConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.RequestorConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.RequestorConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IRequestorProps">IRequestorProps</a>

The properties of the requestor configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.RequestorConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.RequestorConfig.toYaml">toYaml</a></code> | Converts the requestor configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.RequestorConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.RequestorConfig.toYaml"></a>

```typescript
public toYaml(): IRequestorParameters
```

Converts the requestor configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.RequestorConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.RequestorConfig.isConstruct"></a>

```typescript
import { RequestorConfig } from 'zap-cdk'

RequestorConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.RequestorConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.RequestorConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.RequestorConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.RequestorConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.RequestorConfig.property.config"></a>

```typescript
public readonly config: IRequestorParameters;
```

- *Type:* <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

---


### SOAPConfig <a name="SOAPConfig" id="zap-cdk.SOAPConfig"></a>

Class representing the SOAP configuration.

#### Initializers <a name="Initializers" id="zap-cdk.SOAPConfig.Initializer"></a>

```typescript
import { SOAPConfig } from 'zap-cdk'

new SOAPConfig(scope: Construct, id: string, props: ISoapProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SOAPConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.SOAPConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.SOAPConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.ISoapProps">ISoapProps</a></code> | - The properties of the SOAP configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.SOAPConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.SOAPConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.SOAPConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.ISoapProps">ISoapProps</a>

The properties of the SOAP configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SOAPConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.SOAPConfig.toYaml">toYaml</a></code> | Converts the SOAP configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.SOAPConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.SOAPConfig.toYaml"></a>

```typescript
public toYaml(): ISoap
```

Converts the SOAP configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SOAPConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.SOAPConfig.isConstruct"></a>

```typescript
import { SOAPConfig } from 'zap-cdk'

SOAPConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.SOAPConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SOAPConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.SOAPConfig.property.config">config</a></code> | <code><a href="#zap-cdk.ISoap">ISoap</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.SOAPConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.SOAPConfig.property.config"></a>

```typescript
public readonly config: ISoap;
```

- *Type:* <a href="#zap-cdk.ISoap">ISoap</a>

---


### SpiderAjaxConfig <a name="SpiderAjaxConfig" id="zap-cdk.SpiderAjaxConfig"></a>

Class representing the SpiderAjax configuration.

#### Initializers <a name="Initializers" id="zap-cdk.SpiderAjaxConfig.Initializer"></a>

```typescript
import { SpiderAjaxConfig } from 'zap-cdk'

new SpiderAjaxConfig(scope: Construct, id: string, props: ISpiderAjaxProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderAjaxConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.SpiderAjaxConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.SpiderAjaxConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.ISpiderAjaxProps">ISpiderAjaxProps</a></code> | - The properties of the SpiderAjax configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.SpiderAjaxConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.SpiderAjaxConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.SpiderAjaxConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.ISpiderAjaxProps">ISpiderAjaxProps</a>

The properties of the SpiderAjax configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SpiderAjaxConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.SpiderAjaxConfig.toYaml">toYaml</a></code> | Converts the SpiderAjax configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.SpiderAjaxConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.SpiderAjaxConfig.toYaml"></a>

```typescript
public toYaml(): ISpiderAjax
```

Converts the SpiderAjax configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SpiderAjaxConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.SpiderAjaxConfig.isConstruct"></a>

```typescript
import { SpiderAjaxConfig } from 'zap-cdk'

SpiderAjaxConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.SpiderAjaxConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderAjaxConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.SpiderAjaxConfig.property.config">config</a></code> | <code><a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.SpiderAjaxConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.SpiderAjaxConfig.property.config"></a>

```typescript
public readonly config: ISpiderAjax;
```

- *Type:* <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

---


### SpiderConfig <a name="SpiderConfig" id="zap-cdk.SpiderConfig"></a>

Class representing the Spider configuration.

#### Initializers <a name="Initializers" id="zap-cdk.SpiderConfig.Initializer"></a>

```typescript
import { SpiderConfig } from 'zap-cdk'

new SpiderConfig(scope: Construct, id: string, props: SpiderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.SpiderConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.SpiderConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.SpiderProps">SpiderProps</a></code> | - The properties of the spider configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.SpiderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.SpiderConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.SpiderConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.SpiderProps">SpiderProps</a>

The properties of the spider configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SpiderConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.SpiderConfig.toYaml">toYaml</a></code> | Converts the spider configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.SpiderConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.SpiderConfig.toYaml"></a>

```typescript
public toYaml(): ISpider
```

Converts the spider configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.SpiderConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.SpiderConfig.isConstruct"></a>

```typescript
import { SpiderConfig } from 'zap-cdk'

SpiderConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.SpiderConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.SpiderConfig.property.config">config</a></code> | <code><a href="#zap-cdk.ISpider">ISpider</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.SpiderConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.SpiderConfig.property.config"></a>

```typescript
public readonly config: ISpider;
```

- *Type:* <a href="#zap-cdk.ISpider">ISpider</a>

---


### ZapConfig <a name="ZapConfig" id="zap-cdk.ZapConfig"></a>

Class representing the Zap configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ZapConfig.Initializer"></a>

```typescript
import { ZapConfig } from 'zap-cdk'

new ZapConfig(scope: Construct, id: string, props: IZap)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ZapConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ZapConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ZapConfig.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IZap">IZap</a></code> | - The properties of the Zap configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ZapConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ZapConfig.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ZapConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IZap">IZap</a>

The properties of the Zap configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ZapConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ZapConfig.synth">synth</a></code> | Synthesizes the Zap configuration to a YAML string. |
| <code><a href="#zap-cdk.ZapConfig.toYaml">toYaml</a></code> | Converts the Zap configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ZapConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="zap-cdk.ZapConfig.synth"></a>

```typescript
public synth(): string
```

Synthesizes the Zap configuration to a YAML string.

##### `toYaml` <a name="toYaml" id="zap-cdk.ZapConfig.toYaml"></a>

```typescript
public toYaml(): IZap
```

Converts the Zap configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ZapConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ZapConfig.isConstruct"></a>

```typescript
import { ZapConfig } from 'zap-cdk'

ZapConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ZapConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ZapConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ZapConfig.property.config">config</a></code> | <code><a href="#zap-cdk.IZap">IZap</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ZapConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ZapConfig.property.config"></a>

```typescript
public readonly config: IZap;
```

- *Type:* <a href="#zap-cdk.IZap">IZap</a>

---


## Structs <a name="Structs" id="Structs"></a>

### SpiderProps <a name="SpiderProps" id="zap-cdk.SpiderProps"></a>

Properties for the SpiderConfig construct.

#### Initializer <a name="Initializer" id="zap-cdk.SpiderProps.Initializer"></a>

```typescript
import { SpiderProps } from 'zap-cdk'

const spiderProps: SpiderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderProps.property.spider">spider</a></code> | <code><a href="#zap-cdk.ISpider">ISpider</a></code> | *No description.* |

---

##### `spider`<sup>Required</sup> <a name="spider" id="zap-cdk.SpiderProps.property.spider"></a>

```typescript
public readonly spider: ISpider;
```

- *Type:* <a href="#zap-cdk.ISpider">ISpider</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IActiveScan <a name="IActiveScan" id="zap-cdk.IActiveScan"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScan">IActiveScan</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScan.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScan.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScan.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScan.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScan.property.policyDefinition">policyDefinition</a></code> | <code><a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a></code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IActiveScan.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IActiveScan.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IActiveScan.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IActiveScan.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="zap-cdk.IActiveScan.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>

---

### IActiveScanConfig <a name="IActiveScanConfig" id="zap-cdk.IActiveScanConfig"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanConfig.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfig.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfig.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfig.property.excludePaths">excludePaths</a></code> | <code>string[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IActiveScanConfig.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanConfigParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IActiveScanConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IActiveScanConfig.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IActiveScanConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="zap-cdk.IActiveScanConfig.property.excludePaths"></a>

```typescript
public readonly excludePaths: string[];
```

- *Type:* string[]

---

### IActiveScanConfigParameters <a name="IActiveScanConfigParameters" id="zap-cdk.IActiveScanConfigParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.inputVectors">inputVectors</a></code> | <code><a href="#zap-cdk.IInputVectors">IInputVectors</a></code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.handleAntiCSRFTokens">handleAntiCSRFTokens</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.injectPluginIdInHeader">injectPluginIdInHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.maxRuleDurationInMins">maxRuleDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.maxScanDurationInMins">maxScanDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanConfigParameters.property.threadPerHost">threadPerHost</a></code> | <code>number</code> | *No description.* |

---

##### `inputVectors`<sup>Required</sup> <a name="inputVectors" id="zap-cdk.IActiveScanConfigParameters.property.inputVectors"></a>

```typescript
public readonly inputVectors: IInputVectors;
```

- *Type:* <a href="#zap-cdk.IInputVectors">IInputVectors</a>

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="zap-cdk.IActiveScanConfigParameters.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `handleAntiCSRFTokens`<sup>Optional</sup> <a name="handleAntiCSRFTokens" id="zap-cdk.IActiveScanConfigParameters.property.handleAntiCSRFTokens"></a>

```typescript
public readonly handleAntiCSRFTokens: boolean;
```

- *Type:* boolean

---

##### `injectPluginIdInHeader`<sup>Optional</sup> <a name="injectPluginIdInHeader" id="zap-cdk.IActiveScanConfigParameters.property.injectPluginIdInHeader"></a>

```typescript
public readonly injectPluginIdInHeader: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.IActiveScanConfigParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxRuleDurationInMins`<sup>Optional</sup> <a name="maxRuleDurationInMins" id="zap-cdk.IActiveScanConfigParameters.property.maxRuleDurationInMins"></a>

```typescript
public readonly maxRuleDurationInMins: number;
```

- *Type:* number

---

##### `maxScanDurationInMins`<sup>Optional</sup> <a name="maxScanDurationInMins" id="zap-cdk.IActiveScanConfigParameters.property.maxScanDurationInMins"></a>

```typescript
public readonly maxScanDurationInMins: number;
```

- *Type:* number

---

##### `threadPerHost`<sup>Optional</sup> <a name="threadPerHost" id="zap-cdk.IActiveScanConfigParameters.property.threadPerHost"></a>

```typescript
public readonly threadPerHost: number;
```

- *Type:* number

---

### IActiveScanConfigProps <a name="IActiveScanConfigProps" id="zap-cdk.IActiveScanConfigProps"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanConfigProps">IActiveScanConfigProps</a>

Properties for the ActiveScanConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanConfigProps.property.activeScanConfig">activeScanConfig</a></code> | <code><a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a></code> | *No description.* |

---

##### `activeScanConfig`<sup>Required</sup> <a name="activeScanConfig" id="zap-cdk.IActiveScanConfigProps.property.activeScanConfig"></a>

```typescript
public readonly activeScanConfig: IActiveScanConfig;
```

- *Type:* <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>

---

### IActiveScanJob <a name="IActiveScanJob" id="zap-cdk.IActiveScanJob"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanJob">IActiveScanJob</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanJob.property.activeScan">activeScan</a></code> | <code><a href="#zap-cdk.IActiveScan">IActiveScan</a></code> | *No description.* |

---

##### `activeScan`<sup>Required</sup> <a name="activeScan" id="zap-cdk.IActiveScanJob.property.activeScan"></a>

```typescript
public readonly activeScan: IActiveScan;
```

- *Type:* <a href="#zap-cdk.IActiveScan">IActiveScan</a>

---

### IActiveScanParameters <a name="IActiveScanParameters" id="zap-cdk.IActiveScanParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanParameters.property.addQueryParam">addQueryParam</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.delayInMs">delayInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.handleAntiCSRFTokens">handleAntiCSRFTokens</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.injectPluginIdInHeader">injectPluginIdInHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.maxRuleDurationInMins">maxRuleDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.maxScanDurationInMins">maxScanDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.scanHeadersAllRequests">scanHeadersAllRequests</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.tests">tests</a></code> | <code><a href="#zap-cdk.IAlertTest">IAlertTest</a> \| <a href="#zap-cdk.IMonitorTest">IMonitorTest</a> \| <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a> \| <a href="#zap-cdk.IUrlTest">IUrlTest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.threadPerHost">threadPerHost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanParameters.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `addQueryParam`<sup>Optional</sup> <a name="addQueryParam" id="zap-cdk.IActiveScanParameters.property.addQueryParam"></a>

```typescript
public readonly addQueryParam: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.IActiveScanParameters.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="zap-cdk.IActiveScanParameters.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `delayInMs`<sup>Optional</sup> <a name="delayInMs" id="zap-cdk.IActiveScanParameters.property.delayInMs"></a>

```typescript
public readonly delayInMs: number;
```

- *Type:* number

---

##### `handleAntiCSRFTokens`<sup>Optional</sup> <a name="handleAntiCSRFTokens" id="zap-cdk.IActiveScanParameters.property.handleAntiCSRFTokens"></a>

```typescript
public readonly handleAntiCSRFTokens: boolean;
```

- *Type:* boolean

---

##### `injectPluginIdInHeader`<sup>Optional</sup> <a name="injectPluginIdInHeader" id="zap-cdk.IActiveScanParameters.property.injectPluginIdInHeader"></a>

```typescript
public readonly injectPluginIdInHeader: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.IActiveScanParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxRuleDurationInMins`<sup>Optional</sup> <a name="maxRuleDurationInMins" id="zap-cdk.IActiveScanParameters.property.maxRuleDurationInMins"></a>

```typescript
public readonly maxRuleDurationInMins: number;
```

- *Type:* number

---

##### `maxScanDurationInMins`<sup>Optional</sup> <a name="maxScanDurationInMins" id="zap-cdk.IActiveScanParameters.property.maxScanDurationInMins"></a>

```typescript
public readonly maxScanDurationInMins: number;
```

- *Type:* number

---

##### `policy`<sup>Optional</sup> <a name="policy" id="zap-cdk.IActiveScanParameters.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `scanHeadersAllRequests`<sup>Optional</sup> <a name="scanHeadersAllRequests" id="zap-cdk.IActiveScanParameters.property.scanHeadersAllRequests"></a>

```typescript
public readonly scanHeadersAllRequests: boolean;
```

- *Type:* boolean

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.IActiveScanParameters.property.tests"></a>

```typescript
public readonly tests: IAlertTest | IMonitorTest | IStatisticsTest | IUrlTest[];
```

- *Type:* <a href="#zap-cdk.IAlertTest">IAlertTest</a> | <a href="#zap-cdk.IMonitorTest">IMonitorTest</a> | <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a> | <a href="#zap-cdk.IUrlTest">IUrlTest</a>[]

---

##### `threadPerHost`<sup>Optional</sup> <a name="threadPerHost" id="zap-cdk.IActiveScanParameters.property.threadPerHost"></a>

```typescript
public readonly threadPerHost: number;
```

- *Type:* number

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.IActiveScanParameters.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.IActiveScanParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### IActiveScanPolicy <a name="IActiveScanPolicy" id="zap-cdk.IActiveScanPolicy"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanPolicy.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicy.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicy.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IActiveScanPolicy.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanPolicyParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IActiveScanPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IActiveScanPolicy.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IActiveScanPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### IActiveScanPolicyDefinition <a name="IActiveScanPolicyDefinition" id="zap-cdk.IActiveScanPolicyDefinition"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanPolicyDefinition.property.createdAt">createdAt</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicyDefinition.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicyDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicyDefinition.property.updatedAt">updatedAt</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicyDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="zap-cdk.IActiveScanPolicyDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: Date;
```

- *Type:* Date

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.IActiveScanPolicyDefinition.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IActiveScanPolicyDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="zap-cdk.IActiveScanPolicyDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: Date;
```

- *Type:* Date

---

##### `description`<sup>Optional</sup> <a name="description" id="zap-cdk.IActiveScanPolicyDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### IActiveScanPolicyParameters <a name="IActiveScanPolicyParameters" id="zap-cdk.IActiveScanPolicyParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanPolicyParameters.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IActiveScanPolicyParameters.property.policyDefinition">policyDefinition</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IActiveScanPolicyParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="zap-cdk.IActiveScanPolicyParameters.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IActiveScanPolicyDefinition;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>

---

### IActiveScanPolicyProps <a name="IActiveScanPolicyProps" id="zap-cdk.IActiveScanPolicyProps"></a>

- *Implemented By:* <a href="#zap-cdk.IActiveScanPolicyProps">IActiveScanPolicyProps</a>

Properties for the ActiveScanPolicyConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IActiveScanPolicyProps.property.activeScanPolicy">activeScanPolicy</a></code> | <code><a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a></code> | *No description.* |

---

##### `activeScanPolicy`<sup>Required</sup> <a name="activeScanPolicy" id="zap-cdk.IActiveScanPolicyProps.property.activeScanPolicy"></a>

```typescript
public readonly activeScanPolicy: IActiveScanPolicy;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>

---

### IAjaxTest <a name="IAjaxTest" id="zap-cdk.IAjaxTest"></a>

- *Implemented By:* <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>

Interface representing a test configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAjaxTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAjaxTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAjaxTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAjaxTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAjaxTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IAjaxTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IAjaxTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.IAjaxTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.IAjaxTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IAjaxTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.IAjaxTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `onFail`<sup>Optional</sup> <a name="onFail" id="zap-cdk.IAjaxTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

### IAlertFilter <a name="IAlertFilter" id="zap-cdk.IAlertFilter"></a>

- *Implemented By:* <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAlertFilter.property.newRisk">newRisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.ruleId">ruleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.attack">attack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.attackRegex">attackRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.evidence">evidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.evidenceRegex">evidenceRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.parameterRegex">parameterRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilter.property.urlRegex">urlRegex</a></code> | <code>boolean</code> | *No description.* |

---

##### `newRisk`<sup>Required</sup> <a name="newRisk" id="zap-cdk.IAlertFilter.property.newRisk"></a>

```typescript
public readonly newRisk: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="zap-cdk.IAlertFilter.property.ruleId"></a>

```typescript
public readonly ruleId: number;
```

- *Type:* number

---

##### `attack`<sup>Optional</sup> <a name="attack" id="zap-cdk.IAlertFilter.property.attack"></a>

```typescript
public readonly attack: string;
```

- *Type:* string

---

##### `attackRegex`<sup>Optional</sup> <a name="attackRegex" id="zap-cdk.IAlertFilter.property.attackRegex"></a>

```typescript
public readonly attackRegex: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.IAlertFilter.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `evidence`<sup>Optional</sup> <a name="evidence" id="zap-cdk.IAlertFilter.property.evidence"></a>

```typescript
public readonly evidence: string;
```

- *Type:* string

---

##### `evidenceRegex`<sup>Optional</sup> <a name="evidenceRegex" id="zap-cdk.IAlertFilter.property.evidenceRegex"></a>

```typescript
public readonly evidenceRegex: boolean;
```

- *Type:* boolean

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="zap-cdk.IAlertFilter.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterRegex`<sup>Optional</sup> <a name="parameterRegex" id="zap-cdk.IAlertFilter.property.parameterRegex"></a>

```typescript
public readonly parameterRegex: boolean;
```

- *Type:* boolean

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.IAlertFilter.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="zap-cdk.IAlertFilter.property.urlRegex"></a>

```typescript
public readonly urlRegex: boolean;
```

- *Type:* boolean

---

### IAlertFilterParameters <a name="IAlertFilterParameters" id="zap-cdk.IAlertFilterParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IAlertFilterParameters">IAlertFilterParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAlertFilterParameters.property.alertFilters">alertFilters</a></code> | <code><a href="#zap-cdk.IAlertFilter">IAlertFilter</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertFilterParameters.property.deleteGlobalAlerts">deleteGlobalAlerts</a></code> | <code>boolean</code> | *No description.* |

---

##### `alertFilters`<sup>Required</sup> <a name="alertFilters" id="zap-cdk.IAlertFilterParameters.property.alertFilters"></a>

```typescript
public readonly alertFilters: IAlertFilter[];
```

- *Type:* <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>[]

---

##### `deleteGlobalAlerts`<sup>Optional</sup> <a name="deleteGlobalAlerts" id="zap-cdk.IAlertFilterParameters.property.deleteGlobalAlerts"></a>

```typescript
public readonly deleteGlobalAlerts: boolean;
```

- *Type:* boolean

---

### IAlertTag <a name="IAlertTag" id="zap-cdk.IAlertTag"></a>

- *Implemented By:* <a href="#zap-cdk.IAlertTag">IAlertTag</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAlertTag.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTag.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTag.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTag.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="zap-cdk.IAlertTag.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Optional</sup> <a name="include" id="zap-cdk.IAlertTag.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.IAlertTag.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.IAlertTag.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

### IAlertTags <a name="IAlertTags" id="zap-cdk.IAlertTags"></a>

- *Implemented By:* <a href="#zap-cdk.IAlertTags">IAlertTags</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAlertTags.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTags.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTags.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTags.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="zap-cdk.IAlertTags.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="zap-cdk.IAlertTags.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.IAlertTags.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.IAlertTags.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

### IAlertTest <a name="IAlertTest" id="zap-cdk.IAlertTest"></a>

- *Implemented By:* <a href="#zap-cdk.IAlertTest">IAlertTest</a>

Interface for alert tests.

Example YAML representation:
```yaml
- name: 'test one'                       # Name of the test, optional
  type: alert                            # Specifies that the test is of type 'alert'
  action: passIfPresent                  # String: The condition (presence/absence) of the alert, default: passIfAbsent
  scanRuleId: 123                        # Integer: The id of the scanRule which generates the alert, mandatory
  alertName: 'SQL Injection'              # String: The name of the alert generated, optional
  url: http://www.example.com/path       # String: The url of the request corresponding to the alert generated, optional
  method: GET                            # String: The method of the request corresponding to the alert generated, optional
  attack: 'SQL Injection Attack'         # String: The actual attack which generated the alert, optional
  param: 'username'                      # String: The parameter which was modified to generate the alert, optional
  evidence: 'Evidence of SQL injection'  # String: The evidence corresponding to the alert generated, optional
  confidence: High                       # String: The confidence of the alert, one of 'False Positive', 'Low', 'Medium', 'High', 'Confirmed', optional
  risk: High                             # String: The risk of the alert, one of 'Informational', 'Low', 'Medium', 'High', optional
  otherInfo: 'Additional context here'   # String: Additional information corresponding to the alert, optional
  onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAlertTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.scanRuleId">scanRuleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.alertName">alertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.attack">attack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.confidence">confidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.evidence">evidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.param">param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.risk">risk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAlertTest.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.IAlertTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `scanRuleId`<sup>Required</sup> <a name="scanRuleId" id="zap-cdk.IAlertTest.property.scanRuleId"></a>

```typescript
public readonly scanRuleId: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IAlertTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `action`<sup>Optional</sup> <a name="action" id="zap-cdk.IAlertTest.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `alertName`<sup>Optional</sup> <a name="alertName" id="zap-cdk.IAlertTest.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

---

##### `attack`<sup>Optional</sup> <a name="attack" id="zap-cdk.IAlertTest.property.attack"></a>

```typescript
public readonly attack: string;
```

- *Type:* string

---

##### `confidence`<sup>Optional</sup> <a name="confidence" id="zap-cdk.IAlertTest.property.confidence"></a>

```typescript
public readonly confidence: string;
```

- *Type:* string

---

##### `evidence`<sup>Optional</sup> <a name="evidence" id="zap-cdk.IAlertTest.property.evidence"></a>

```typescript
public readonly evidence: string;
```

- *Type:* string

---

##### `method`<sup>Optional</sup> <a name="method" id="zap-cdk.IAlertTest.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IAlertTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `param`<sup>Optional</sup> <a name="param" id="zap-cdk.IAlertTest.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

---

##### `risk`<sup>Optional</sup> <a name="risk" id="zap-cdk.IAlertTest.property.risk"></a>

```typescript
public readonly risk: string;
```

- *Type:* string

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.IAlertTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

### IAuthenticationParameters <a name="IAuthenticationParameters" id="zap-cdk.IAuthenticationParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAuthenticationParameters.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParameters.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParameters.property.verification">verification</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a></code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.IAuthenticationParameters.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IAuthenticationParameters.property.parameters"></a>

```typescript
public readonly parameters: IAuthenticationParametersParameters;
```

- *Type:* <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="zap-cdk.IAuthenticationParameters.property.verification"></a>

```typescript
public readonly verification: IAuthenticationParametersVerification;
```

- *Type:* <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>

---

### IAuthenticationParametersParameters <a name="IAuthenticationParametersParameters" id="zap-cdk.IAuthenticationParametersParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.loginPageUrl">loginPageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.loginRequestBody">loginRequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.loginRequestUrl">loginRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.scriptEngine">scriptEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersParameters.property.scriptInline">scriptInline</a></code> | <code>string</code> | *No description.* |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="zap-cdk.IAuthenticationParametersParameters.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `loginPageUrl`<sup>Optional</sup> <a name="loginPageUrl" id="zap-cdk.IAuthenticationParametersParameters.property.loginPageUrl"></a>

```typescript
public readonly loginPageUrl: string;
```

- *Type:* string

---

##### `loginRequestBody`<sup>Optional</sup> <a name="loginRequestBody" id="zap-cdk.IAuthenticationParametersParameters.property.loginRequestBody"></a>

```typescript
public readonly loginRequestBody: string;
```

- *Type:* string

---

##### `loginRequestUrl`<sup>Optional</sup> <a name="loginRequestUrl" id="zap-cdk.IAuthenticationParametersParameters.property.loginRequestUrl"></a>

```typescript
public readonly loginRequestUrl: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="zap-cdk.IAuthenticationParametersParameters.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `realm`<sup>Optional</sup> <a name="realm" id="zap-cdk.IAuthenticationParametersParameters.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `script`<sup>Optional</sup> <a name="script" id="zap-cdk.IAuthenticationParametersParameters.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptEngine`<sup>Optional</sup> <a name="scriptEngine" id="zap-cdk.IAuthenticationParametersParameters.property.scriptEngine"></a>

```typescript
public readonly scriptEngine: string;
```

- *Type:* string

---

##### `scriptInline`<sup>Optional</sup> <a name="scriptInline" id="zap-cdk.IAuthenticationParametersParameters.property.scriptInline"></a>

```typescript
public readonly scriptInline: string;
```

- *Type:* string

---

### IAuthenticationParametersVerification <a name="IAuthenticationParametersVerification" id="zap-cdk.IAuthenticationParametersVerification"></a>

- *Implemented By:* <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.loggedInRegex">loggedInRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.loggedOutRegex">loggedOutRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.pollAdditionalHeaders">pollAdditionalHeaders</a></code> | <code><a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.pollFrequency">pollFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.pollPostData">pollPostData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.pollUnits">pollUnits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IAuthenticationParametersVerification.property.pollUrl">pollUrl</a></code> | <code>string</code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.IAuthenticationParametersVerification.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `loggedInRegex`<sup>Optional</sup> <a name="loggedInRegex" id="zap-cdk.IAuthenticationParametersVerification.property.loggedInRegex"></a>

```typescript
public readonly loggedInRegex: string;
```

- *Type:* string

---

##### `loggedOutRegex`<sup>Optional</sup> <a name="loggedOutRegex" id="zap-cdk.IAuthenticationParametersVerification.property.loggedOutRegex"></a>

```typescript
public readonly loggedOutRegex: string;
```

- *Type:* string

---

##### `pollAdditionalHeaders`<sup>Optional</sup> <a name="pollAdditionalHeaders" id="zap-cdk.IAuthenticationParametersVerification.property.pollAdditionalHeaders"></a>

```typescript
public readonly pollAdditionalHeaders: IPollAdditionalHeaders[];
```

- *Type:* <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>[]

---

##### `pollFrequency`<sup>Optional</sup> <a name="pollFrequency" id="zap-cdk.IAuthenticationParametersVerification.property.pollFrequency"></a>

```typescript
public readonly pollFrequency: number;
```

- *Type:* number

---

##### `pollPostData`<sup>Optional</sup> <a name="pollPostData" id="zap-cdk.IAuthenticationParametersVerification.property.pollPostData"></a>

```typescript
public readonly pollPostData: string;
```

- *Type:* string

---

##### `pollUnits`<sup>Optional</sup> <a name="pollUnits" id="zap-cdk.IAuthenticationParametersVerification.property.pollUnits"></a>

```typescript
public readonly pollUnits: string;
```

- *Type:* string

---

##### `pollUrl`<sup>Optional</sup> <a name="pollUrl" id="zap-cdk.IAuthenticationParametersVerification.property.pollUrl"></a>

```typescript
public readonly pollUrl: string;
```

- *Type:* string

---

### IContext <a name="IContext" id="zap-cdk.IContext"></a>

- *Implemented By:* <a href="#zap-cdk.IContext">IContext</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IContext.property.authentication">authentication</a></code> | <code><a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.sessionManagement">sessionManagement</a></code> | <code><a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.structure">structure</a></code> | <code><a href="#zap-cdk.IContextStructure">IContextStructure</a></code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.technology">technology</a></code> | <code><a href="#zap-cdk.ITechnology">ITechnology</a></code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.urls">urls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.users">users</a></code> | <code><a href="#zap-cdk.IContextUser">IContextUser</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.excludePaths">excludePaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IContext.property.includePaths">includePaths</a></code> | <code>string[]</code> | *No description.* |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="zap-cdk.IContext.property.authentication"></a>

```typescript
public readonly authentication: IAuthenticationParameters;
```

- *Type:* <a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a>

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IContext.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sessionManagement`<sup>Required</sup> <a name="sessionManagement" id="zap-cdk.IContext.property.sessionManagement"></a>

```typescript
public readonly sessionManagement: ISessionManagementParameters;
```

- *Type:* <a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a>

---

##### `structure`<sup>Required</sup> <a name="structure" id="zap-cdk.IContext.property.structure"></a>

```typescript
public readonly structure: IContextStructure;
```

- *Type:* <a href="#zap-cdk.IContextStructure">IContextStructure</a>

---

##### `technology`<sup>Required</sup> <a name="technology" id="zap-cdk.IContext.property.technology"></a>

```typescript
public readonly technology: ITechnology;
```

- *Type:* <a href="#zap-cdk.ITechnology">ITechnology</a>

---

##### `urls`<sup>Required</sup> <a name="urls" id="zap-cdk.IContext.property.urls"></a>

```typescript
public readonly urls: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="zap-cdk.IContext.property.users"></a>

```typescript
public readonly users: IContextUser[];
```

- *Type:* <a href="#zap-cdk.IContextUser">IContextUser</a>[]

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="zap-cdk.IContext.property.excludePaths"></a>

```typescript
public readonly excludePaths: string[];
```

- *Type:* string[]

---

##### `includePaths`<sup>Optional</sup> <a name="includePaths" id="zap-cdk.IContext.property.includePaths"></a>

```typescript
public readonly includePaths: string[];
```

- *Type:* string[]

---

### IContextStructure <a name="IContextStructure" id="zap-cdk.IContextStructure"></a>

- *Implemented By:* <a href="#zap-cdk.IContextStructure">IContextStructure</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IContextStructure.property.dataDrivenNodes">dataDrivenNodes</a></code> | <code><a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IContextStructure.property.structuralParameters">structuralParameters</a></code> | <code>string[]</code> | *No description.* |

---

##### `dataDrivenNodes`<sup>Optional</sup> <a name="dataDrivenNodes" id="zap-cdk.IContextStructure.property.dataDrivenNodes"></a>

```typescript
public readonly dataDrivenNodes: IDataDrivenNode[];
```

- *Type:* <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>[]

---

##### `structuralParameters`<sup>Optional</sup> <a name="structuralParameters" id="zap-cdk.IContextStructure.property.structuralParameters"></a>

```typescript
public readonly structuralParameters: string[];
```

- *Type:* string[]

---

### IContextUser <a name="IContextUser" id="zap-cdk.IContextUser"></a>

- *Implemented By:* <a href="#zap-cdk.IContextUser">IContextUser</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IContextUser.property.credentials">credentials</a></code> | <code><a href="#zap-cdk.IUserCredentials">IUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IContextUser.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="zap-cdk.IContextUser.property.credentials"></a>

```typescript
public readonly credentials: IUserCredentials[];
```

- *Type:* <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IContextUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### ICookieData <a name="ICookieData" id="zap-cdk.ICookieData"></a>

- *Implemented By:* <a href="#zap-cdk.ICookieData">ICookieData</a>

Configuration for cookie data scanning.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ICookieData.property.enabled">enabled</a></code> | <code>boolean</code> | If cookie scanning is enabled. |
| <code><a href="#zap-cdk.ICookieData.property.encodeCookieValues">encodeCookieValues</a></code> | <code>boolean</code> | If cookie values should be encoded. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ICookieData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If cookie scanning is enabled.

Default: false

---

##### `encodeCookieValues`<sup>Optional</sup> <a name="encodeCookieValues" id="zap-cdk.ICookieData.property.encodeCookieValues"></a>

```typescript
public readonly encodeCookieValues: boolean;
```

- *Type:* boolean

If cookie values should be encoded.

Default: false

---

### IDataDrivenNode <a name="IDataDrivenNode" id="zap-cdk.IDataDrivenNode"></a>

- *Implemented By:* <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IDataDrivenNode.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IDataDrivenNode.property.regex">regex</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.IDataDrivenNode.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="zap-cdk.IDataDrivenNode.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

### IDelay <a name="IDelay" id="zap-cdk.IDelay"></a>

- *Implemented By:* <a href="#zap-cdk.IDelay">IDelay</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IDelay.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IDelayParameters">IDelayParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IDelay.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IDelay.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IDelay.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IDelay.property.parameters"></a>

```typescript
public readonly parameters: IDelayParameters;
```

- *Type:* <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IDelay.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IDelay.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IDelay.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### IDelayParameters <a name="IDelayParameters" id="zap-cdk.IDelayParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IDelayParameters.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IDelayParameters.property.time">time</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="zap-cdk.IDelayParameters.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `time`<sup>Optional</sup> <a name="time" id="zap-cdk.IDelayParameters.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

### IDelayProps <a name="IDelayProps" id="zap-cdk.IDelayProps"></a>

- *Implemented By:* <a href="#zap-cdk.IDelayProps">IDelayProps</a>

Properties for the DelayConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IDelayProps.property.delay">delay</a></code> | <code><a href="#zap-cdk.IDelay">IDelay</a></code> | *No description.* |

---

##### `delay`<sup>Required</sup> <a name="delay" id="zap-cdk.IDelayProps.property.delay"></a>

```typescript
public readonly delay: IDelay;
```

- *Type:* <a href="#zap-cdk.IDelay">IDelay</a>

---

### IEnvironment <a name="IEnvironment" id="zap-cdk.IEnvironment"></a>

- *Implemented By:* <a href="#zap-cdk.IEnvironment">IEnvironment</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IEnvironment.property.contexts">contexts</a></code> | <code><a href="#zap-cdk.IContext">IContext</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironment.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IEnvironmentParameters">IEnvironmentParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironment.property.proxy">proxy</a></code> | <code><a href="#zap-cdk.IEnvironmentProxy">IEnvironmentProxy</a></code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironment.property.vars">vars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `contexts`<sup>Required</sup> <a name="contexts" id="zap-cdk.IEnvironment.property.contexts"></a>

```typescript
public readonly contexts: IContext[];
```

- *Type:* <a href="#zap-cdk.IContext">IContext</a>[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IEnvironment.property.parameters"></a>

```typescript
public readonly parameters: IEnvironmentParameters;
```

- *Type:* <a href="#zap-cdk.IEnvironmentParameters">IEnvironmentParameters</a>

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="zap-cdk.IEnvironment.property.proxy"></a>

```typescript
public readonly proxy: IEnvironmentProxy;
```

- *Type:* <a href="#zap-cdk.IEnvironmentProxy">IEnvironmentProxy</a>

---

##### `vars`<sup>Optional</sup> <a name="vars" id="zap-cdk.IEnvironment.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### IEnvironmentParameters <a name="IEnvironmentParameters" id="zap-cdk.IEnvironmentParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IEnvironmentParameters">IEnvironmentParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IEnvironmentParameters.property.continueOnFailure">continueOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentParameters.property.failOnError">failOnError</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentParameters.property.failOnWarning">failOnWarning</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentParameters.property.progressToStdout">progressToStdout</a></code> | <code>boolean</code> | *No description.* |

---

##### `continueOnFailure`<sup>Optional</sup> <a name="continueOnFailure" id="zap-cdk.IEnvironmentParameters.property.continueOnFailure"></a>

```typescript
public readonly continueOnFailure: boolean;
```

- *Type:* boolean

---

##### `failOnError`<sup>Optional</sup> <a name="failOnError" id="zap-cdk.IEnvironmentParameters.property.failOnError"></a>

```typescript
public readonly failOnError: boolean;
```

- *Type:* boolean

---

##### `failOnWarning`<sup>Optional</sup> <a name="failOnWarning" id="zap-cdk.IEnvironmentParameters.property.failOnWarning"></a>

```typescript
public readonly failOnWarning: boolean;
```

- *Type:* boolean

---

##### `progressToStdout`<sup>Optional</sup> <a name="progressToStdout" id="zap-cdk.IEnvironmentParameters.property.progressToStdout"></a>

```typescript
public readonly progressToStdout: boolean;
```

- *Type:* boolean

---

### IEnvironmentProps <a name="IEnvironmentProps" id="zap-cdk.IEnvironmentProps"></a>

- *Implemented By:* <a href="#zap-cdk.IEnvironmentProps">IEnvironmentProps</a>

Properties for the EnvironmentConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IEnvironmentProps.property.environment">environment</a></code> | <code><a href="#zap-cdk.IEnvironment">IEnvironment</a></code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="zap-cdk.IEnvironmentProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#zap-cdk.IEnvironment">IEnvironment</a>

---

### IEnvironmentProxy <a name="IEnvironmentProxy" id="zap-cdk.IEnvironmentProxy"></a>

- *Implemented By:* <a href="#zap-cdk.IEnvironmentProxy">IEnvironmentProxy</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IEnvironmentProxy.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentProxy.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentProxy.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentProxy.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IEnvironmentProxy.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="zap-cdk.IEnvironmentProxy.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="zap-cdk.IEnvironmentProxy.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="zap-cdk.IEnvironmentProxy.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `realm`<sup>Optional</sup> <a name="realm" id="zap-cdk.IEnvironmentProxy.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="zap-cdk.IEnvironmentProxy.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### IExcludedElement <a name="IExcludedElement" id="zap-cdk.IExcludedElement"></a>

- *Implemented By:* <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>

Interface representing an excluded HTML element configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExcludedElement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExcludedElement.property.element">element</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExcludedElement.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExcludedElement.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExcludedElement.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExcludedElement.property.xpath">xpath</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="zap-cdk.IExcludedElement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `element`<sup>Required</sup> <a name="element" id="zap-cdk.IExcludedElement.property.element"></a>

```typescript
public readonly element: string;
```

- *Type:* string

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="zap-cdk.IExcludedElement.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="zap-cdk.IExcludedElement.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `text`<sup>Optional</sup> <a name="text" id="zap-cdk.IExcludedElement.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `xpath`<sup>Optional</sup> <a name="xpath" id="zap-cdk.IExcludedElement.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

---

### IExitStatus <a name="IExitStatus" id="zap-cdk.IExitStatus"></a>

- *Implemented By:* <a href="#zap-cdk.IExitStatus">IExitStatus</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExitStatus.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatus.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatus.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatus.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IExitStatus.property.parameters"></a>

```typescript
public readonly parameters: IExitStatusParameters;
```

- *Type:* <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IExitStatus.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IExitStatus.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IExitStatus.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### IExitStatusParameters <a name="IExitStatusParameters" id="zap-cdk.IExitStatusParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExitStatusParameters.property.errorExitValue">errorExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatusParameters.property.errorLevel">errorLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatusParameters.property.okExitValue">okExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatusParameters.property.warnExitValue">warnExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IExitStatusParameters.property.warnLevel">warnLevel</a></code> | <code>string</code> | *No description.* |

---

##### `errorExitValue`<sup>Optional</sup> <a name="errorExitValue" id="zap-cdk.IExitStatusParameters.property.errorExitValue"></a>

```typescript
public readonly errorExitValue: number;
```

- *Type:* number

---

##### `errorLevel`<sup>Optional</sup> <a name="errorLevel" id="zap-cdk.IExitStatusParameters.property.errorLevel"></a>

```typescript
public readonly errorLevel: string;
```

- *Type:* string

---

##### `okExitValue`<sup>Optional</sup> <a name="okExitValue" id="zap-cdk.IExitStatusParameters.property.okExitValue"></a>

```typescript
public readonly okExitValue: number;
```

- *Type:* number

---

##### `warnExitValue`<sup>Optional</sup> <a name="warnExitValue" id="zap-cdk.IExitStatusParameters.property.warnExitValue"></a>

```typescript
public readonly warnExitValue: number;
```

- *Type:* number

---

##### `warnLevel`<sup>Optional</sup> <a name="warnLevel" id="zap-cdk.IExitStatusParameters.property.warnLevel"></a>

```typescript
public readonly warnLevel: string;
```

- *Type:* string

---

### IExitStatusProps <a name="IExitStatusProps" id="zap-cdk.IExitStatusProps"></a>

- *Implemented By:* <a href="#zap-cdk.IExitStatusProps">IExitStatusProps</a>

Properties for the ExitStatusConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExitStatusProps.property.exitStatus">exitStatus</a></code> | <code><a href="#zap-cdk.IExitStatus">IExitStatus</a></code> | *No description.* |

---

##### `exitStatus`<sup>Required</sup> <a name="exitStatus" id="zap-cdk.IExitStatusProps.property.exitStatus"></a>

```typescript
public readonly exitStatus: IExitStatus;
```

- *Type:* <a href="#zap-cdk.IExitStatus">IExitStatus</a>

---

### IExport <a name="IExport" id="zap-cdk.IExport"></a>

- *Implemented By:* <a href="#zap-cdk.IExport">IExport</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExport.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExport.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExport.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IExport.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="zap-cdk.IExport.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.IExport.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `source`<sup>Optional</sup> <a name="source" id="zap-cdk.IExport.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Optional</sup> <a name="type" id="zap-cdk.IExport.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### IExportProps <a name="IExportProps" id="zap-cdk.IExportProps"></a>

- *Implemented By:* <a href="#zap-cdk.IExportProps">IExportProps</a>

Properties for the ExportConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IExportProps.property.export">export</a></code> | <code><a href="#zap-cdk.IExport">IExport</a></code> | *No description.* |

---

##### `export`<sup>Required</sup> <a name="export" id="zap-cdk.IExportProps.property.export"></a>

```typescript
public readonly export: IExport;
```

- *Type:* <a href="#zap-cdk.IExport">IExport</a>

---

### IGraphQL <a name="IGraphQL" id="zap-cdk.IGraphQL"></a>

- *Implemented By:* <a href="#zap-cdk.IGraphQL">IGraphQL</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IGraphQL.property.argsType">argsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.lenientMaxQueryDepthEnabled">lenientMaxQueryDepthEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.maxAdditionalQueryDepth">maxAdditionalQueryDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.maxArgsDepth">maxArgsDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.maxQueryDepth">maxQueryDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.optionalArgsEnabled">optionalArgsEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.queryGenEnabled">queryGenEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.querySplitType">querySplitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.schemaFile">schemaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IGraphQL.property.schemaUrl">schemaUrl</a></code> | <code>string</code> | *No description.* |

---

##### `argsType`<sup>Optional</sup> <a name="argsType" id="zap-cdk.IGraphQL.property.argsType"></a>

```typescript
public readonly argsType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="zap-cdk.IGraphQL.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `lenientMaxQueryDepthEnabled`<sup>Optional</sup> <a name="lenientMaxQueryDepthEnabled" id="zap-cdk.IGraphQL.property.lenientMaxQueryDepthEnabled"></a>

```typescript
public readonly lenientMaxQueryDepthEnabled: boolean;
```

- *Type:* boolean

---

##### `maxAdditionalQueryDepth`<sup>Optional</sup> <a name="maxAdditionalQueryDepth" id="zap-cdk.IGraphQL.property.maxAdditionalQueryDepth"></a>

```typescript
public readonly maxAdditionalQueryDepth: number;
```

- *Type:* number

---

##### `maxArgsDepth`<sup>Optional</sup> <a name="maxArgsDepth" id="zap-cdk.IGraphQL.property.maxArgsDepth"></a>

```typescript
public readonly maxArgsDepth: number;
```

- *Type:* number

---

##### `maxQueryDepth`<sup>Optional</sup> <a name="maxQueryDepth" id="zap-cdk.IGraphQL.property.maxQueryDepth"></a>

```typescript
public readonly maxQueryDepth: number;
```

- *Type:* number

---

##### `optionalArgsEnabled`<sup>Optional</sup> <a name="optionalArgsEnabled" id="zap-cdk.IGraphQL.property.optionalArgsEnabled"></a>

```typescript
public readonly optionalArgsEnabled: boolean;
```

- *Type:* boolean

---

##### `queryGenEnabled`<sup>Optional</sup> <a name="queryGenEnabled" id="zap-cdk.IGraphQL.property.queryGenEnabled"></a>

```typescript
public readonly queryGenEnabled: boolean;
```

- *Type:* boolean

---

##### `querySplitType`<sup>Optional</sup> <a name="querySplitType" id="zap-cdk.IGraphQL.property.querySplitType"></a>

```typescript
public readonly querySplitType: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="zap-cdk.IGraphQL.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `schemaFile`<sup>Optional</sup> <a name="schemaFile" id="zap-cdk.IGraphQL.property.schemaFile"></a>

```typescript
public readonly schemaFile: string;
```

- *Type:* string

---

##### `schemaUrl`<sup>Optional</sup> <a name="schemaUrl" id="zap-cdk.IGraphQL.property.schemaUrl"></a>

```typescript
public readonly schemaUrl: string;
```

- *Type:* string

---

### IGraphQLProps <a name="IGraphQLProps" id="zap-cdk.IGraphQLProps"></a>

- *Implemented By:* <a href="#zap-cdk.IGraphQLProps">IGraphQLProps</a>

Properties for the GraphQLConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IGraphQLProps.property.graphql">graphql</a></code> | <code><a href="#zap-cdk.IGraphQL">IGraphQL</a></code> | *No description.* |

---

##### `graphql`<sup>Required</sup> <a name="graphql" id="zap-cdk.IGraphQLProps.property.graphql"></a>

```typescript
public readonly graphql: IGraphQL;
```

- *Type:* <a href="#zap-cdk.IGraphQL">IGraphQL</a>

---

### IHttpHeaders <a name="IHttpHeaders" id="zap-cdk.IHttpHeaders"></a>

- *Implemented By:* <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

Configuration for HTTP header scanning.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IHttpHeaders.property.allRequests">allRequests</a></code> | <code>boolean</code> | If headers of requests without parameters should be scanned. |
| <code><a href="#zap-cdk.IHttpHeaders.property.enabled">enabled</a></code> | <code>boolean</code> | If HTTP header scanning should be enabled. |

---

##### `allRequests`<sup>Optional</sup> <a name="allRequests" id="zap-cdk.IHttpHeaders.property.allRequests"></a>

```typescript
public readonly allRequests: boolean;
```

- *Type:* boolean

If headers of requests without parameters should be scanned.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IHttpHeaders.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If HTTP header scanning should be enabled.

Default: false

---

### IImport <a name="IImport" id="zap-cdk.IImport"></a>

- *Implemented By:* <a href="#zap-cdk.IImport">IImport</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IImport.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IImport.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="zap-cdk.IImport.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IImport.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### IImportProps <a name="IImportProps" id="zap-cdk.IImportProps"></a>

- *Implemented By:* <a href="#zap-cdk.IImportProps">IImportProps</a>

Properties for the ImportConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IImportProps.property.import">import</a></code> | <code><a href="#zap-cdk.IImport">IImport</a></code> | *No description.* |

---

##### `import`<sup>Required</sup> <a name="import" id="zap-cdk.IImportProps.property.import"></a>

```typescript
public readonly import: IImport;
```

- *Type:* <a href="#zap-cdk.IImport">IImport</a>

---

### IInputVectors <a name="IInputVectors" id="zap-cdk.IInputVectors"></a>

- *Implemented By:* <a href="#zap-cdk.IInputVectors">IInputVectors</a>

Represents the configuration for input vectors used in an active scan.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IInputVectors.property.cookieData">cookieData</a></code> | <code><a href="#zap-cdk.ICookieData">ICookieData</a></code> | Configuration for cookie data scanning. |
| <code><a href="#zap-cdk.IInputVectors.property.httpHeaders">httpHeaders</a></code> | <code><a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a></code> | Configuration for HTTP header scanning. |
| <code><a href="#zap-cdk.IInputVectors.property.postData">postData</a></code> | <code><a href="#zap-cdk.IPostData">IPostData</a></code> | Configuration for POST data scanning. |
| <code><a href="#zap-cdk.IInputVectors.property.urlQueryStringAndDataDrivenNodes">urlQueryStringAndDataDrivenNodes</a></code> | <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a></code> | Configuration for query parameters and data-driven nodes. |
| <code><a href="#zap-cdk.IInputVectors.property.scripts">scripts</a></code> | <code>boolean</code> | If Input Vector scripts should be used. |
| <code><a href="#zap-cdk.IInputVectors.property.urlPath">urlPath</a></code> | <code>boolean</code> | If URL path segments should be scanned. |

---

##### `cookieData`<sup>Required</sup> <a name="cookieData" id="zap-cdk.IInputVectors.property.cookieData"></a>

```typescript
public readonly cookieData: ICookieData;
```

- *Type:* <a href="#zap-cdk.ICookieData">ICookieData</a>

Configuration for cookie data scanning.

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="zap-cdk.IInputVectors.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IHttpHeaders;
```

- *Type:* <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

Configuration for HTTP header scanning.

---

##### `postData`<sup>Required</sup> <a name="postData" id="zap-cdk.IInputVectors.property.postData"></a>

```typescript
public readonly postData: IPostData;
```

- *Type:* <a href="#zap-cdk.IPostData">IPostData</a>

Configuration for POST data scanning.

---

##### `urlQueryStringAndDataDrivenNodes`<sup>Required</sup> <a name="urlQueryStringAndDataDrivenNodes" id="zap-cdk.IInputVectors.property.urlQueryStringAndDataDrivenNodes"></a>

```typescript
public readonly urlQueryStringAndDataDrivenNodes: IUrlQueryStringAndDataDrivenNodes;
```

- *Type:* <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

Configuration for query parameters and data-driven nodes.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="zap-cdk.IInputVectors.property.scripts"></a>

```typescript
public readonly scripts: boolean;
```

- *Type:* boolean

If Input Vector scripts should be used.

Default: true

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="zap-cdk.IInputVectors.property.urlPath"></a>

```typescript
public readonly urlPath: boolean;
```

- *Type:* boolean

If URL path segments should be scanned.

Default: false

---

### IJsonPostData <a name="IJsonPostData" id="zap-cdk.IJsonPostData"></a>

- *Implemented By:* <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

Configuration for JSON body scanning in POST data.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IJsonPostData.property.enabled">enabled</a></code> | <code>boolean</code> | If JSON scanning should be enabled. |
| <code><a href="#zap-cdk.IJsonPostData.property.scanNullValues">scanNullValues</a></code> | <code>boolean</code> | If null values should be scanned. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IJsonPostData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If JSON scanning should be enabled.

Default: true

---

##### `scanNullValues`<sup>Optional</sup> <a name="scanNullValues" id="zap-cdk.IJsonPostData.property.scanNullValues"></a>

```typescript
public readonly scanNullValues: boolean;
```

- *Type:* boolean

If null values should be scanned.

Default: false

---

### IMonitorTest <a name="IMonitorTest" id="zap-cdk.IMonitorTest"></a>

- *Implemented By:* <a href="#zap-cdk.IMonitorTest">IMonitorTest</a>

Interface for monitor tests.

Example YAML representation:
```yaml
- name: 'test one'                      # Name of the test, optional
  type: monitor                         # Specifies that the test is of type 'monitor'
  statistic: 'stats.addon.something'    # Name of an integer / long statistic
  site:                                 # Name of the site for site specific tests, supports vars
  threshold: 10                         # The threshold at which a statistic fails
  onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IMonitorTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IMonitorTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IMonitorTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IMonitorTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IMonitorTest.property.site">site</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.IMonitorTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.IMonitorTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IMonitorTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IMonitorTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `site`<sup>Optional</sup> <a name="site" id="zap-cdk.IMonitorTest.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---

### INewType <a name="INewType" id="zap-cdk.INewType"></a>

- *Implemented By:* <a href="#zap-cdk.INewType">INewType</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.INewType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.INewType.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.INewType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="zap-cdk.INewType.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### IOpenAPI <a name="IOpenAPI" id="zap-cdk.IOpenAPI"></a>

- *Implemented By:* <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IOpenAPI.property.apiFile">apiFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IOpenAPI.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IOpenAPI.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IOpenAPI.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IOpenAPI.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `apiFile`<sup>Optional</sup> <a name="apiFile" id="zap-cdk.IOpenAPI.property.apiFile"></a>

```typescript
public readonly apiFile: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="zap-cdk.IOpenAPI.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.IOpenAPI.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="zap-cdk.IOpenAPI.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.IOpenAPI.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### IOpenAPIProps <a name="IOpenAPIProps" id="zap-cdk.IOpenAPIProps"></a>

- *Implemented By:* <a href="#zap-cdk.IOpenAPIProps">IOpenAPIProps</a>

Properties for the OpenAPIConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IOpenAPIProps.property.openapi">openapi</a></code> | <code><a href="#zap-cdk.IOpenAPI">IOpenAPI</a></code> | *No description.* |

---

##### `openapi`<sup>Required</sup> <a name="openapi" id="zap-cdk.IOpenAPIProps.property.openapi"></a>

```typescript
public readonly openapi: IOpenAPI;
```

- *Type:* <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>

---

### IPassiveScanConfig <a name="IPassiveScanConfig" id="zap-cdk.IPassiveScanConfig"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanConfig.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanConfig.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanConfig.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanConfig.property.rules">rules</a></code> | <code><a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.IPassiveScanConfig.property.parameters"></a>

```typescript
public readonly parameters: IPassiveScanParameters;
```

- *Type:* <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IPassiveScanConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IPassiveScanConfig.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IPassiveScanConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `rules`<sup>Optional</sup> <a name="rules" id="zap-cdk.IPassiveScanConfig.property.rules"></a>

```typescript
public readonly rules: IPassiveScanRule[];
```

- *Type:* <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>[]

---

### IPassiveScanConfigProps <a name="IPassiveScanConfigProps" id="zap-cdk.IPassiveScanConfigProps"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanConfigProps">IPassiveScanConfigProps</a>

Properties for the PassiveScanConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanConfigProps.property.passiveScanConfig">passiveScanConfig</a></code> | <code><a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a></code> | *No description.* |

---

##### `passiveScanConfig`<sup>Required</sup> <a name="passiveScanConfig" id="zap-cdk.IPassiveScanConfigProps.property.passiveScanConfig"></a>

```typescript
public readonly passiveScanConfig: IPassiveScanConfig;
```

- *Type:* <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>

---

### IPassiveScanParameters <a name="IPassiveScanParameters" id="zap-cdk.IPassiveScanParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanParameters.property.disableAllRules">disableAllRules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanParameters.property.enableTags">enableTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanParameters.property.maxBodySizeInBytesToScan">maxBodySizeInBytesToScan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanParameters.property.scanOnlyInScope">scanOnlyInScope</a></code> | <code>boolean</code> | *No description.* |

---

##### `disableAllRules`<sup>Optional</sup> <a name="disableAllRules" id="zap-cdk.IPassiveScanParameters.property.disableAllRules"></a>

```typescript
public readonly disableAllRules: boolean;
```

- *Type:* boolean

---

##### `enableTags`<sup>Optional</sup> <a name="enableTags" id="zap-cdk.IPassiveScanParameters.property.enableTags"></a>

```typescript
public readonly enableTags: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.IPassiveScanParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxBodySizeInBytesToScan`<sup>Optional</sup> <a name="maxBodySizeInBytesToScan" id="zap-cdk.IPassiveScanParameters.property.maxBodySizeInBytesToScan"></a>

```typescript
public readonly maxBodySizeInBytesToScan: number;
```

- *Type:* number

---

##### `scanOnlyInScope`<sup>Optional</sup> <a name="scanOnlyInScope" id="zap-cdk.IPassiveScanParameters.property.scanOnlyInScope"></a>

```typescript
public readonly scanOnlyInScope: boolean;
```

- *Type:* boolean

---

### IPassiveScanRule <a name="IPassiveScanRule" id="zap-cdk.IPassiveScanRule"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanRule.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPassiveScanRule.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.IPassiveScanRule.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IPassiveScanRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.IPassiveScanRule.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

### IPassiveScanWait <a name="IPassiveScanWait" id="zap-cdk.IPassiveScanWait"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanWait.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.IPassiveScanWait.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---

### IPassiveScanWaitProps <a name="IPassiveScanWaitProps" id="zap-cdk.IPassiveScanWaitProps"></a>

- *Implemented By:* <a href="#zap-cdk.IPassiveScanWaitProps">IPassiveScanWaitProps</a>

Properties for the PassiveScanWaitConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPassiveScanWaitProps.property.passiveScanWait">passiveScanWait</a></code> | <code><a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a></code> | *No description.* |

---

##### `passiveScanWait`<sup>Required</sup> <a name="passiveScanWait" id="zap-cdk.IPassiveScanWaitProps.property.passiveScanWait"></a>

```typescript
public readonly passiveScanWait: IPassiveScanWait;
```

- *Type:* <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a>

---

### IPolicyDefinition <a name="IPolicyDefinition" id="zap-cdk.IPolicyDefinition"></a>

- *Implemented By:* <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPolicyDefinition.property.alertTags">alertTags</a></code> | <code><a href="#zap-cdk.IAlertTags">IAlertTags</a></code> | *No description.* |
| <code><a href="#zap-cdk.IPolicyDefinition.property.defaultStrength">defaultStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPolicyDefinition.property.defaultThreshold">defaultThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPolicyDefinition.property.rules">rules</a></code> | <code><a href="#zap-cdk.IRules">IRules</a>[]</code> | *No description.* |

---

##### `alertTags`<sup>Optional</sup> <a name="alertTags" id="zap-cdk.IPolicyDefinition.property.alertTags"></a>

```typescript
public readonly alertTags: IAlertTags;
```

- *Type:* <a href="#zap-cdk.IAlertTags">IAlertTags</a>

---

##### `defaultStrength`<sup>Optional</sup> <a name="defaultStrength" id="zap-cdk.IPolicyDefinition.property.defaultStrength"></a>

```typescript
public readonly defaultStrength: string;
```

- *Type:* string

---

##### `defaultThreshold`<sup>Optional</sup> <a name="defaultThreshold" id="zap-cdk.IPolicyDefinition.property.defaultThreshold"></a>

```typescript
public readonly defaultThreshold: string;
```

- *Type:* string

---

##### `rules`<sup>Optional</sup> <a name="rules" id="zap-cdk.IPolicyDefinition.property.rules"></a>

```typescript
public readonly rules: IRules[];
```

- *Type:* <a href="#zap-cdk.IRules">IRules</a>[]

---

### IPollAdditionalHeaders <a name="IPollAdditionalHeaders" id="zap-cdk.IPollAdditionalHeaders"></a>

- *Implemented By:* <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPollAdditionalHeaders.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPollAdditionalHeaders.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `header`<sup>Required</sup> <a name="header" id="zap-cdk.IPollAdditionalHeaders.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.IPollAdditionalHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### IPostData <a name="IPostData" id="zap-cdk.IPostData"></a>

- *Implemented By:* <a href="#zap-cdk.IPostData">IPostData</a>

Configuration for POST data scanning.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPostData.property.json">json</a></code> | <code><a href="#zap-cdk.IJsonPostData">IJsonPostData</a></code> | Configuration for JSON bodies. |
| <code><a href="#zap-cdk.IPostData.property.directWebRemoting">directWebRemoting</a></code> | <code>boolean</code> | If DWR scanning should be enabled. |
| <code><a href="#zap-cdk.IPostData.property.enabled">enabled</a></code> | <code>boolean</code> | If POST data scanning is enabled. |
| <code><a href="#zap-cdk.IPostData.property.googleWebToolkit">googleWebToolkit</a></code> | <code>boolean</code> | If GWT scanning should be enabled. |
| <code><a href="#zap-cdk.IPostData.property.multiPartFormData">multiPartFormData</a></code> | <code>boolean</code> | If multipart form data bodies should be scanned. |
| <code><a href="#zap-cdk.IPostData.property.xml">xml</a></code> | <code>boolean</code> | If XML bodies should be scanned. |

---

##### `json`<sup>Required</sup> <a name="json" id="zap-cdk.IPostData.property.json"></a>

```typescript
public readonly json: IJsonPostData;
```

- *Type:* <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

Configuration for JSON bodies.

---

##### `directWebRemoting`<sup>Optional</sup> <a name="directWebRemoting" id="zap-cdk.IPostData.property.directWebRemoting"></a>

```typescript
public readonly directWebRemoting: boolean;
```

- *Type:* boolean

If DWR scanning should be enabled.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IPostData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If POST data scanning is enabled.

Default: true

---

##### `googleWebToolkit`<sup>Optional</sup> <a name="googleWebToolkit" id="zap-cdk.IPostData.property.googleWebToolkit"></a>

```typescript
public readonly googleWebToolkit: boolean;
```

- *Type:* boolean

If GWT scanning should be enabled.

Default: false

---

##### `multiPartFormData`<sup>Optional</sup> <a name="multiPartFormData" id="zap-cdk.IPostData.property.multiPartFormData"></a>

```typescript
public readonly multiPartFormData: boolean;
```

- *Type:* boolean

If multipart form data bodies should be scanned.

Default: true

---

##### `xml`<sup>Optional</sup> <a name="xml" id="zap-cdk.IPostData.property.xml"></a>

```typescript
public readonly xml: boolean;
```

- *Type:* boolean

If XML bodies should be scanned.

Default: true

---

### IPostman <a name="IPostman" id="zap-cdk.IPostman"></a>

- *Implemented By:* <a href="#zap-cdk.IPostman">IPostman</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPostman.property.collectionFile">collectionFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPostman.property.collectionUrl">collectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IPostman.property.variables">variables</a></code> | <code>string</code> | *No description.* |

---

##### `collectionFile`<sup>Optional</sup> <a name="collectionFile" id="zap-cdk.IPostman.property.collectionFile"></a>

```typescript
public readonly collectionFile: string;
```

- *Type:* string

---

##### `collectionUrl`<sup>Optional</sup> <a name="collectionUrl" id="zap-cdk.IPostman.property.collectionUrl"></a>

```typescript
public readonly collectionUrl: string;
```

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="zap-cdk.IPostman.property.variables"></a>

```typescript
public readonly variables: string;
```

- *Type:* string

---

### IPostmanProps <a name="IPostmanProps" id="zap-cdk.IPostmanProps"></a>

- *Implemented By:* <a href="#zap-cdk.IPostmanProps">IPostmanProps</a>

Properties for the PostmanConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IPostmanProps.property.postman">postman</a></code> | <code><a href="#zap-cdk.IPostman">IPostman</a></code> | *No description.* |

---

##### `postman`<sup>Required</sup> <a name="postman" id="zap-cdk.IPostmanProps.property.postman"></a>

```typescript
public readonly postman: IPostman;
```

- *Type:* <a href="#zap-cdk.IPostman">IPostman</a>

---

### IReplacer <a name="IReplacer" id="zap-cdk.IReplacer"></a>

- *Implemented By:* <a href="#zap-cdk.IReplacer">IReplacer</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IReplacer.property.rules">rules</a></code> | <code><a href="#zap-cdk.IReplacerRule">IReplacerRule</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacer.property.deleteAllRules">deleteAllRules</a></code> | <code>boolean</code> | *No description.* |

---

##### `rules`<sup>Required</sup> <a name="rules" id="zap-cdk.IReplacer.property.rules"></a>

```typescript
public readonly rules: IReplacerRule[];
```

- *Type:* <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>[]

---

##### `deleteAllRules`<sup>Optional</sup> <a name="deleteAllRules" id="zap-cdk.IReplacer.property.deleteAllRules"></a>

```typescript
public readonly deleteAllRules: boolean;
```

- *Type:* boolean

---

### IReplacerProps <a name="IReplacerProps" id="zap-cdk.IReplacerProps"></a>

- *Implemented By:* <a href="#zap-cdk.IReplacerProps">IReplacerProps</a>

Properties for the ReplacerConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IReplacerProps.property.replacer">replacer</a></code> | <code><a href="#zap-cdk.IReplacer">IReplacer</a></code> | *No description.* |

---

##### `replacer`<sup>Required</sup> <a name="replacer" id="zap-cdk.IReplacerProps.property.replacer"></a>

```typescript
public readonly replacer: IReplacer;
```

- *Type:* <a href="#zap-cdk.IReplacer">IReplacer</a>

---

### IReplacerRule <a name="IReplacerRule" id="zap-cdk.IReplacerRule"></a>

- *Implemented By:* <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IReplacerRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.matchString">matchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.replacementString">replacementString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.initiators">initiators</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.matchRegex">matchRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.tokenProcessing">tokenProcessing</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IReplacerRule.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="zap-cdk.IReplacerRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `matchString`<sup>Required</sup> <a name="matchString" id="zap-cdk.IReplacerRule.property.matchString"></a>

```typescript
public readonly matchString: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="zap-cdk.IReplacerRule.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `replacementString`<sup>Required</sup> <a name="replacementString" id="zap-cdk.IReplacerRule.property.replacementString"></a>

```typescript
public readonly replacementString: string;
```

- *Type:* string

---

##### `initiators`<sup>Optional</sup> <a name="initiators" id="zap-cdk.IReplacerRule.property.initiators"></a>

```typescript
public readonly initiators: number[];
```

- *Type:* number[]

---

##### `matchRegex`<sup>Optional</sup> <a name="matchRegex" id="zap-cdk.IReplacerRule.property.matchRegex"></a>

```typescript
public readonly matchRegex: boolean;
```

- *Type:* boolean

---

##### `tokenProcessing`<sup>Optional</sup> <a name="tokenProcessing" id="zap-cdk.IReplacerRule.property.tokenProcessing"></a>

```typescript
public readonly tokenProcessing: boolean;
```

- *Type:* boolean

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.IReplacerRule.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

### IReport <a name="IReport" id="zap-cdk.IReport"></a>

- *Implemented By:* <a href="#zap-cdk.IReport">IReport</a>

Interface representing a report configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IReport.property.confidences">confidences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.displayReport">displayReport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.reportDescription">reportDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.reportDir">reportDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.reportFile">reportFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.reportTitle">reportTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.risks">risks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.sections">sections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.sites">sites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IReport.property.theme">theme</a></code> | <code>string</code> | *No description.* |

---

##### `confidences`<sup>Optional</sup> <a name="confidences" id="zap-cdk.IReport.property.confidences"></a>

```typescript
public readonly confidences: string[];
```

- *Type:* string[]

---

##### `displayReport`<sup>Optional</sup> <a name="displayReport" id="zap-cdk.IReport.property.displayReport"></a>

```typescript
public readonly displayReport: boolean;
```

- *Type:* boolean

---

##### `reportDescription`<sup>Optional</sup> <a name="reportDescription" id="zap-cdk.IReport.property.reportDescription"></a>

```typescript
public readonly reportDescription: string;
```

- *Type:* string

---

##### `reportDir`<sup>Optional</sup> <a name="reportDir" id="zap-cdk.IReport.property.reportDir"></a>

```typescript
public readonly reportDir: string;
```

- *Type:* string

---

##### `reportFile`<sup>Optional</sup> <a name="reportFile" id="zap-cdk.IReport.property.reportFile"></a>

```typescript
public readonly reportFile: string;
```

- *Type:* string

---

##### `reportTitle`<sup>Optional</sup> <a name="reportTitle" id="zap-cdk.IReport.property.reportTitle"></a>

```typescript
public readonly reportTitle: string;
```

- *Type:* string

---

##### `risks`<sup>Optional</sup> <a name="risks" id="zap-cdk.IReport.property.risks"></a>

```typescript
public readonly risks: string[];
```

- *Type:* string[]

---

##### `sections`<sup>Optional</sup> <a name="sections" id="zap-cdk.IReport.property.sections"></a>

```typescript
public readonly sections: string[];
```

- *Type:* string[]

---

##### `sites`<sup>Optional</sup> <a name="sites" id="zap-cdk.IReport.property.sites"></a>

```typescript
public readonly sites: string[];
```

- *Type:* string[]

---

##### `template`<sup>Optional</sup> <a name="template" id="zap-cdk.IReport.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `theme`<sup>Optional</sup> <a name="theme" id="zap-cdk.IReport.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

### IReportProps <a name="IReportProps" id="zap-cdk.IReportProps"></a>

- *Implemented By:* <a href="#zap-cdk.IReportProps">IReportProps</a>

Properties for the ReportConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IReportProps.property.report">report</a></code> | <code><a href="#zap-cdk.IReport">IReport</a></code> | *No description.* |

---

##### `report`<sup>Required</sup> <a name="report" id="zap-cdk.IReportProps.property.report"></a>

```typescript
public readonly report: IReport;
```

- *Type:* <a href="#zap-cdk.IReport">IReport</a>

---

### IRequest <a name="IRequest" id="zap-cdk.IRequest"></a>

- *Implemented By:* <a href="#zap-cdk.IRequest">IRequest</a>

Interface representing a single request configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IRequest.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.httpVersion">httpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRequest.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |

---

##### `url`<sup>Required</sup> <a name="url" id="zap-cdk.IRequest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `data`<sup>Optional</sup> <a name="data" id="zap-cdk.IRequest.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="zap-cdk.IRequest.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="zap-cdk.IRequest.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

---

##### `method`<sup>Optional</sup> <a name="method" id="zap-cdk.IRequest.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="zap-cdk.IRequest.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

### IRequestorParameters <a name="IRequestorParameters" id="zap-cdk.IRequestorParameters"></a>

- *Implemented By:* <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

Interface representing the parameters for making requests.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IRequestorParameters.property.requests">requests</a></code> | <code><a href="#zap-cdk.IRequest">IRequest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.IRequestorParameters.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IRequestorParameters.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.IRequestorParameters.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `requests`<sup>Required</sup> <a name="requests" id="zap-cdk.IRequestorParameters.property.requests"></a>

```typescript
public readonly requests: IRequest[];
```

- *Type:* <a href="#zap-cdk.IRequest">IRequest</a>[]

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.IRequestorParameters.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IRequestorParameters.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.IRequestorParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### IRequestorProps <a name="IRequestorProps" id="zap-cdk.IRequestorProps"></a>

- *Implemented By:* <a href="#zap-cdk.IRequestorProps">IRequestorProps</a>

Properties for the RequestorConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IRequestorProps.property.requestor">requestor</a></code> | <code><a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a></code> | *No description.* |

---

##### `requestor`<sup>Required</sup> <a name="requestor" id="zap-cdk.IRequestorProps.property.requestor"></a>

```typescript
public readonly requestor: IRequestorParameters;
```

- *Type:* <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

---

### IRule <a name="IRule" id="zap-cdk.IRule"></a>

- *Implemented By:* <a href="#zap-cdk.IRule">IRule</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IRule.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRule.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRule.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.IRule.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.IRule.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.IRule.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

### IRules <a name="IRules" id="zap-cdk.IRules"></a>

- *Implemented By:* <a href="#zap-cdk.IRules">IRules</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IRules.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IRules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRules.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IRules.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.IRules.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.IRules.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.IRules.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

### ISessionManagementParameters <a name="ISessionManagementParameters" id="zap-cdk.ISessionManagementParameters"></a>

- *Implemented By:* <a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISessionManagementParameters.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISessionManagementParameters.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a></code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.ISessionManagementParameters.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ISessionManagementParameters.property.parameters"></a>

```typescript
public readonly parameters: ISessionManagementParametersParameters;
```

- *Type:* <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>

---

### ISessionManagementParametersParameters <a name="ISessionManagementParametersParameters" id="zap-cdk.ISessionManagementParametersParameters"></a>

- *Implemented By:* <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISessionManagementParametersParameters.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISessionManagementParametersParameters.property.scriptEngine">scriptEngine</a></code> | <code>string</code> | *No description.* |

---

##### `script`<sup>Optional</sup> <a name="script" id="zap-cdk.ISessionManagementParametersParameters.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptEngine`<sup>Optional</sup> <a name="scriptEngine" id="zap-cdk.ISessionManagementParametersParameters.property.scriptEngine"></a>

```typescript
public readonly scriptEngine: string;
```

- *Type:* string

---

### ISoap <a name="ISoap" id="zap-cdk.ISoap"></a>

- *Implemented By:* <a href="#zap-cdk.ISoap">ISoap</a>

Interface representing the configuration for a SOAP service.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISoap.property.wsdlFile">wsdlFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISoap.property.wsdlUrl">wsdlUrl</a></code> | <code>string</code> | *No description.* |

---

##### `wsdlFile`<sup>Optional</sup> <a name="wsdlFile" id="zap-cdk.ISoap.property.wsdlFile"></a>

```typescript
public readonly wsdlFile: string;
```

- *Type:* string

---

##### `wsdlUrl`<sup>Optional</sup> <a name="wsdlUrl" id="zap-cdk.ISoap.property.wsdlUrl"></a>

```typescript
public readonly wsdlUrl: string;
```

- *Type:* string

---

### ISoapProps <a name="ISoapProps" id="zap-cdk.ISoapProps"></a>

- *Implemented By:* <a href="#zap-cdk.ISoapProps">ISoapProps</a>

Properties for the SOAPConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISoapProps.property.soap">soap</a></code> | <code><a href="#zap-cdk.ISoap">ISoap</a></code> | *No description.* |

---

##### `soap`<sup>Required</sup> <a name="soap" id="zap-cdk.ISoapProps.property.soap"></a>

```typescript
public readonly soap: ISoap;
```

- *Type:* <a href="#zap-cdk.ISoap">ISoap</a>

---

### ISpider <a name="ISpider" id="zap-cdk.ISpider"></a>

- *Implemented By:* <a href="#zap-cdk.ISpider">ISpider</a>

Interface representing a spider configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISpider.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.ISpider.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpider.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpider.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpider.property.tests">tests</a></code> | <code><a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ISpider.property.parameters"></a>

```typescript
public readonly parameters: ISpiderParameters;
```

- *Type:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ISpider.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.ISpider.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ISpider.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.ISpider.property.tests"></a>

```typescript
public readonly tests: ISpiderTest[];
```

- *Type:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]

---

### ISpiderAjax <a name="ISpiderAjax" id="zap-cdk.ISpiderAjax"></a>

- *Implemented By:* <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

Interface representing the parameters for an AJAX spider configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISpiderAjax.property.browserId">browserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.clickDefaultElems">clickDefaultElems</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.clickElemsOnce">clickElemsOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.elements">elements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.eventWait">eventWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.excludedElements">excludedElements</a></code> | <code><a href="#zap-cdk.IExcludedElement">IExcludedElement</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.inScopeOnly">inScopeOnly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.maxCrawlDepth">maxCrawlDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.maxCrawlStates">maxCrawlStates</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.numberOfBrowsers">numberOfBrowsers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.randomInputs">randomInputs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.reloadWait">reloadWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.runOnlyIfModern">runOnlyIfModern</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.scopeCheck">scopeCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.tests">tests</a></code> | <code><a href="#zap-cdk.IAjaxTest">IAjaxTest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderAjax.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `browserId`<sup>Optional</sup> <a name="browserId" id="zap-cdk.ISpiderAjax.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

---

##### `clickDefaultElems`<sup>Optional</sup> <a name="clickDefaultElems" id="zap-cdk.ISpiderAjax.property.clickDefaultElems"></a>

```typescript
public readonly clickDefaultElems: boolean;
```

- *Type:* boolean

---

##### `clickElemsOnce`<sup>Optional</sup> <a name="clickElemsOnce" id="zap-cdk.ISpiderAjax.property.clickElemsOnce"></a>

```typescript
public readonly clickElemsOnce: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.ISpiderAjax.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `elements`<sup>Optional</sup> <a name="elements" id="zap-cdk.ISpiderAjax.property.elements"></a>

```typescript
public readonly elements: string[];
```

- *Type:* string[]

---

##### `eventWait`<sup>Optional</sup> <a name="eventWait" id="zap-cdk.ISpiderAjax.property.eventWait"></a>

```typescript
public readonly eventWait: number;
```

- *Type:* number

---

##### `excludedElements`<sup>Optional</sup> <a name="excludedElements" id="zap-cdk.ISpiderAjax.property.excludedElements"></a>

```typescript
public readonly excludedElements: IExcludedElement[];
```

- *Type:* <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>[]

---

##### `inScopeOnly`<sup>Optional</sup> <a name="inScopeOnly" id="zap-cdk.ISpiderAjax.property.inScopeOnly"></a>

```typescript
public readonly inScopeOnly: boolean;
```

- *Type:* boolean

---

##### `maxCrawlDepth`<sup>Optional</sup> <a name="maxCrawlDepth" id="zap-cdk.ISpiderAjax.property.maxCrawlDepth"></a>

```typescript
public readonly maxCrawlDepth: number;
```

- *Type:* number

---

##### `maxCrawlStates`<sup>Optional</sup> <a name="maxCrawlStates" id="zap-cdk.ISpiderAjax.property.maxCrawlStates"></a>

```typescript
public readonly maxCrawlStates: number;
```

- *Type:* number

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.ISpiderAjax.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---

##### `numberOfBrowsers`<sup>Optional</sup> <a name="numberOfBrowsers" id="zap-cdk.ISpiderAjax.property.numberOfBrowsers"></a>

```typescript
public readonly numberOfBrowsers: number;
```

- *Type:* number

---

##### `randomInputs`<sup>Optional</sup> <a name="randomInputs" id="zap-cdk.ISpiderAjax.property.randomInputs"></a>

```typescript
public readonly randomInputs: boolean;
```

- *Type:* boolean

---

##### `reloadWait`<sup>Optional</sup> <a name="reloadWait" id="zap-cdk.ISpiderAjax.property.reloadWait"></a>

```typescript
public readonly reloadWait: number;
```

- *Type:* number

---

##### `runOnlyIfModern`<sup>Optional</sup> <a name="runOnlyIfModern" id="zap-cdk.ISpiderAjax.property.runOnlyIfModern"></a>

```typescript
public readonly runOnlyIfModern: boolean;
```

- *Type:* boolean

---

##### `scopeCheck`<sup>Optional</sup> <a name="scopeCheck" id="zap-cdk.ISpiderAjax.property.scopeCheck"></a>

```typescript
public readonly scopeCheck: string;
```

- *Type:* string

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.ISpiderAjax.property.tests"></a>

```typescript
public readonly tests: IAjaxTest[];
```

- *Type:* <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>[]

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.ISpiderAjax.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.ISpiderAjax.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

### ISpiderAjaxProps <a name="ISpiderAjaxProps" id="zap-cdk.ISpiderAjaxProps"></a>

- *Implemented By:* <a href="#zap-cdk.ISpiderAjaxProps">ISpiderAjaxProps</a>

Properties for the SpiderAjaxConfig construct.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISpiderAjaxProps.property.spiderAjax">spiderAjax</a></code> | <code><a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a></code> | *No description.* |

---

##### `spiderAjax`<sup>Required</sup> <a name="spiderAjax" id="zap-cdk.ISpiderAjaxProps.property.spiderAjax"></a>

```typescript
public readonly spiderAjax: ISpiderAjax;
```

- *Type:* <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

---

### ISpiderParameters <a name="ISpiderParameters" id="zap-cdk.ISpiderParameters"></a>

- *Implemented By:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

Interface representing the parameters for a spider configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISpiderParameters.property.acceptCookies">acceptCookies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.handleODataParametersVisited">handleODataParametersVisited</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.handleParameters">handleParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.logoutAvoidance">logoutAvoidance</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.maxChildren">maxChildren</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.maxDepth">maxDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.maxParseSizeBytes">maxParseSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseComments">parseComments</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseDsStore">parseDsStore</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseGit">parseGit</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseRobotsTxt">parseRobotsTxt</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseSitemapXml">parseSitemapXml</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.parseSVNEntries">parseSVNEntries</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.postForm">postForm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.processForm">processForm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.sendRefererHeader">sendRefererHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.threadCount">threadCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderParameters.property.userAgent">userAgent</a></code> | <code>string</code> | *No description.* |

---

##### `acceptCookies`<sup>Optional</sup> <a name="acceptCookies" id="zap-cdk.ISpiderParameters.property.acceptCookies"></a>

```typescript
public readonly acceptCookies: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.ISpiderParameters.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `handleODataParametersVisited`<sup>Optional</sup> <a name="handleODataParametersVisited" id="zap-cdk.ISpiderParameters.property.handleODataParametersVisited"></a>

```typescript
public readonly handleODataParametersVisited: boolean;
```

- *Type:* boolean

---

##### `handleParameters`<sup>Optional</sup> <a name="handleParameters" id="zap-cdk.ISpiderParameters.property.handleParameters"></a>

```typescript
public readonly handleParameters: string;
```

- *Type:* string

---

##### `logoutAvoidance`<sup>Optional</sup> <a name="logoutAvoidance" id="zap-cdk.ISpiderParameters.property.logoutAvoidance"></a>

```typescript
public readonly logoutAvoidance: boolean;
```

- *Type:* boolean

---

##### `maxChildren`<sup>Optional</sup> <a name="maxChildren" id="zap-cdk.ISpiderParameters.property.maxChildren"></a>

```typescript
public readonly maxChildren: number;
```

- *Type:* number

---

##### `maxDepth`<sup>Optional</sup> <a name="maxDepth" id="zap-cdk.ISpiderParameters.property.maxDepth"></a>

```typescript
public readonly maxDepth: number;
```

- *Type:* number

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.ISpiderParameters.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---

##### `maxParseSizeBytes`<sup>Optional</sup> <a name="maxParseSizeBytes" id="zap-cdk.ISpiderParameters.property.maxParseSizeBytes"></a>

```typescript
public readonly maxParseSizeBytes: number;
```

- *Type:* number

---

##### `parseComments`<sup>Optional</sup> <a name="parseComments" id="zap-cdk.ISpiderParameters.property.parseComments"></a>

```typescript
public readonly parseComments: boolean;
```

- *Type:* boolean

---

##### `parseDsStore`<sup>Optional</sup> <a name="parseDsStore" id="zap-cdk.ISpiderParameters.property.parseDsStore"></a>

```typescript
public readonly parseDsStore: boolean;
```

- *Type:* boolean

---

##### `parseGit`<sup>Optional</sup> <a name="parseGit" id="zap-cdk.ISpiderParameters.property.parseGit"></a>

```typescript
public readonly parseGit: boolean;
```

- *Type:* boolean

---

##### `parseRobotsTxt`<sup>Optional</sup> <a name="parseRobotsTxt" id="zap-cdk.ISpiderParameters.property.parseRobotsTxt"></a>

```typescript
public readonly parseRobotsTxt: boolean;
```

- *Type:* boolean

---

##### `parseSitemapXml`<sup>Optional</sup> <a name="parseSitemapXml" id="zap-cdk.ISpiderParameters.property.parseSitemapXml"></a>

```typescript
public readonly parseSitemapXml: boolean;
```

- *Type:* boolean

---

##### `parseSVNEntries`<sup>Optional</sup> <a name="parseSVNEntries" id="zap-cdk.ISpiderParameters.property.parseSVNEntries"></a>

```typescript
public readonly parseSVNEntries: boolean;
```

- *Type:* boolean

---

##### `postForm`<sup>Optional</sup> <a name="postForm" id="zap-cdk.ISpiderParameters.property.postForm"></a>

```typescript
public readonly postForm: boolean;
```

- *Type:* boolean

---

##### `processForm`<sup>Optional</sup> <a name="processForm" id="zap-cdk.ISpiderParameters.property.processForm"></a>

```typescript
public readonly processForm: boolean;
```

- *Type:* boolean

---

##### `sendRefererHeader`<sup>Optional</sup> <a name="sendRefererHeader" id="zap-cdk.ISpiderParameters.property.sendRefererHeader"></a>

```typescript
public readonly sendRefererHeader: boolean;
```

- *Type:* boolean

---

##### `threadCount`<sup>Optional</sup> <a name="threadCount" id="zap-cdk.ISpiderParameters.property.threadCount"></a>

```typescript
public readonly threadCount: number;
```

- *Type:* number

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.ISpiderParameters.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.ISpiderParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="zap-cdk.ISpiderParameters.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

---

### ISpiderTest <a name="ISpiderTest" id="zap-cdk.ISpiderTest"></a>

- *Implemented By:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>

Interface representing a test configuration for the spider.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ISpiderTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ISpiderTest.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.ISpiderTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.ISpiderTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.ISpiderTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ISpiderTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.ISpiderTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.ISpiderTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### IStatisticsTest <a name="IStatisticsTest" id="zap-cdk.IStatisticsTest"></a>

- *Implemented By:* <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a>

Interface for statistics tests.

Example YAML representation:
```yaml
- name: 'test one'                      # Name of the test, optional
  type: stats                           # Specifies that the test is of type 'stats'
  statistic: 'stats.addon.something'    # Name of an integer / long statistic
  site:                                 # Name of the site for site specific tests, supports vars
  operator: '>='                        # One of '==', '!=', '>=', '>', '<', '<='
  value: 10                             # Value to compare statistic against
  onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IStatisticsTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IStatisticsTest.property.site">site</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.IStatisticsTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.IStatisticsTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.IStatisticsTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IStatisticsTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.IStatisticsTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IStatisticsTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `site`<sup>Optional</sup> <a name="site" id="zap-cdk.IStatisticsTest.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---

### ITechnology <a name="ITechnology" id="zap-cdk.ITechnology"></a>

- *Implemented By:* <a href="#zap-cdk.ITechnology">ITechnology</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ITechnology.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.ITechnology.property.include">include</a></code> | <code>string[]</code> | *No description.* |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="zap-cdk.ITechnology.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Optional</sup> <a name="include" id="zap-cdk.ITechnology.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

### ITotpConfig <a name="ITotpConfig" id="zap-cdk.ITotpConfig"></a>

- *Implemented By:* <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ITotpConfig.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ITotpConfig.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ITotpConfig.property.digits">digits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ITotpConfig.property.period">period</a></code> | <code>number</code> | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="secret" id="zap-cdk.ITotpConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="zap-cdk.ITotpConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `digits`<sup>Optional</sup> <a name="digits" id="zap-cdk.ITotpConfig.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

---

##### `period`<sup>Optional</sup> <a name="period" id="zap-cdk.ITotpConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

### IUrlQueryStringAndDataDrivenNodes <a name="IUrlQueryStringAndDataDrivenNodes" id="zap-cdk.IUrlQueryStringAndDataDrivenNodes"></a>

- *Implemented By:* <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

Configuration options for scanning URL query strings and Data Driven Nodes (DDNs).


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.addParam">addParam</a></code> | <code>boolean</code> | If a query parameter should be added if none present. |
| <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.enabled">enabled</a></code> | <code>boolean</code> | If query parameters and DDNs scanning should be enabled. |
| <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.odata">odata</a></code> | <code>boolean</code> | If OData query filters should be scanned. |

---

##### `addParam`<sup>Optional</sup> <a name="addParam" id="zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.addParam"></a>

```typescript
public readonly addParam: boolean;
```

- *Type:* boolean

If a query parameter should be added if none present.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If query parameters and DDNs scanning should be enabled.

Default: true

---

##### `odata`<sup>Optional</sup> <a name="odata" id="zap-cdk.IUrlQueryStringAndDataDrivenNodes.property.odata"></a>

```typescript
public readonly odata: boolean;
```

- *Type:* boolean

If OData query filters should be scanned.

Default: true

---

### IUrlTest <a name="IUrlTest" id="zap-cdk.IUrlTest"></a>

- *Implemented By:* <a href="#zap-cdk.IUrlTest">IUrlTest</a>

Interface for URL tests.

Example YAML representation:
```yaml
- name: 'test one'                      # Name of the test, optional
  type: url                             # Specifies that the test is of type 'url'
  url: http://www.example.com/path      # String: The URL to be tested.
  operator: 'and'                       # One of 'and', 'or', default is 'or'
  requestHeaderRegex:                   # String: The regular expression to be matched in the request header, optional
  requestBodyRegex:                     # String: The regular expression to be matched in the request body, optional
  responseHeaderRegex:                  # String: The regular expression to be matched in the response header, optional
  responseBodyRegex:                    # String: The regular expression to be matched in the response body, optional
  onFail: 'info'                        # String: One of 'warn', 'error', 'info', mandatory
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IUrlTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.requestBodyRegex">requestBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.requestHeaderRegex">requestHeaderRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUrlTest.property.responseHeaderRegex">responseHeaderRegex</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.IUrlTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.IUrlTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.IUrlTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="zap-cdk.IUrlTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.IUrlTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestBodyRegex`<sup>Optional</sup> <a name="requestBodyRegex" id="zap-cdk.IUrlTest.property.requestBodyRegex"></a>

```typescript
public readonly requestBodyRegex: string;
```

- *Type:* string

---

##### `requestHeaderRegex`<sup>Optional</sup> <a name="requestHeaderRegex" id="zap-cdk.IUrlTest.property.requestHeaderRegex"></a>

```typescript
public readonly requestHeaderRegex: string;
```

- *Type:* string

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="zap-cdk.IUrlTest.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

---

##### `responseHeaderRegex`<sup>Optional</sup> <a name="responseHeaderRegex" id="zap-cdk.IUrlTest.property.responseHeaderRegex"></a>

```typescript
public readonly responseHeaderRegex: string;
```

- *Type:* string

---

### IUserCredentials <a name="IUserCredentials" id="zap-cdk.IUserCredentials"></a>

- *Implemented By:* <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IUserCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUserCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.IUserCredentials.property.totp">totp</a></code> | <code><a href="#zap-cdk.ITotpConfig">ITotpConfig</a></code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="zap-cdk.IUserCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="zap-cdk.IUserCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `totp`<sup>Optional</sup> <a name="totp" id="zap-cdk.IUserCredentials.property.totp"></a>

```typescript
public readonly totp: ITotpConfig;
```

- *Type:* <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>

---

### IZap <a name="IZap" id="zap-cdk.IZap"></a>

- *Implemented By:* <a href="#zap-cdk.IZap">IZap</a>

Interface representing the ZAP (Zed Attack Proxy) configuration.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.IZap.property.env">env</a></code> | <code><a href="#zap-cdk.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#zap-cdk.IZap.property.jobs">jobs</a></code> | <code><a href="#zap-cdk.IActiveScan">IActiveScan</a> \| <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a> \| <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a> \| <a href="#zap-cdk.ISpider">ISpider</a> \| <a href="#zap-cdk.IDelay">IDelay</a> \| <a href="#zap-cdk.IExitStatus">IExitStatus</a> \| <a href="#zap-cdk.IExport">IExport</a> \| <a href="#zap-cdk.IGraphQL">IGraphQL</a> \| <a href="#zap-cdk.IImport">IImport</a> \| <a href="#zap-cdk.IOpenAPI">IOpenAPI</a> \| <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a> \| <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a> \| <a href="#zap-cdk.IPostman">IPostman</a> \| <a href="#zap-cdk.IReplacer">IReplacer</a> \| <a href="#zap-cdk.IReport">IReport</a> \| <a href="#zap-cdk.IRequest">IRequest</a> \| <a href="#zap-cdk.ISoap">ISoap</a> \| <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a> \| <a href="#zap-cdk.INewType">INewType</a>[]</code> | *No description.* |

---

##### `env`<sup>Required</sup> <a name="env" id="zap-cdk.IZap.property.env"></a>

```typescript
public readonly env: IEnvironment;
```

- *Type:* <a href="#zap-cdk.IEnvironment">IEnvironment</a>

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="zap-cdk.IZap.property.jobs"></a>

```typescript
public readonly jobs: IActiveScan | IActiveScanPolicy | IActiveScanConfig | ISpider | IDelay | IExitStatus | IExport | IGraphQL | IImport | IOpenAPI | IPassiveScanConfig | IPassiveScanWait | IPostman | IReplacer | IReport | IRequest | ISoap | ISpiderAjax | INewType[];
```

- *Type:* <a href="#zap-cdk.IActiveScan">IActiveScan</a> | <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a> | <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a> | <a href="#zap-cdk.ISpider">ISpider</a> | <a href="#zap-cdk.IDelay">IDelay</a> | <a href="#zap-cdk.IExitStatus">IExitStatus</a> | <a href="#zap-cdk.IExport">IExport</a> | <a href="#zap-cdk.IGraphQL">IGraphQL</a> | <a href="#zap-cdk.IImport">IImport</a> | <a href="#zap-cdk.IOpenAPI">IOpenAPI</a> | <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a> | <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a> | <a href="#zap-cdk.IPostman">IPostman</a> | <a href="#zap-cdk.IReplacer">IReplacer</a> | <a href="#zap-cdk.IReport">IReport</a> | <a href="#zap-cdk.IRequest">IRequest</a> | <a href="#zap-cdk.ISoap">ISoap</a> | <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a> | <a href="#zap-cdk.INewType">INewType</a>[]

---

