# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveScanConfigConstruct <a name="ActiveScanConfigConstruct" id="zap-cdk.ActiveScanConfigConstruct"></a>

Class representing the active scan configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanConfigConstruct.Initializer"></a>

```typescript
import { ActiveScanConfigConstruct } from 'zap-cdk'

new ActiveScanConfigConstruct(scope: Construct, id: string, props: IActiveScanConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IActiveScanConfigProps">IActiveScanConfigProps</a></code> | - The properties of the active scan configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.ActiveScanConfigConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IActiveScanConfigProps">IActiveScanConfigProps</a>

The properties of the active scan configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.toYaml">toYaml</a></code> | Converts the active scan configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.ActiveScanConfigConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.ActiveScanConfigConstruct.toYaml"></a>

```typescript
public toYaml(): IActiveScanConfig
```

Converts the active scan configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.ActiveScanConfigConstruct.isConstruct"></a>

```typescript
import { ActiveScanConfigConstruct } from 'zap-cdk'

ActiveScanConfigConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.ActiveScanConfigConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.ActiveScanConfigConstruct.property.config">config</a></code> | <code><a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a></code> | The active scan configuration properties. |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.ActiveScanConfigConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.ActiveScanConfigConstruct.property.config"></a>

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


### PassiveScanConfigConstruct <a name="PassiveScanConfigConstruct" id="zap-cdk.PassiveScanConfigConstruct"></a>

Class representing the passive scan configuration.

#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanConfigConstruct.Initializer"></a>

```typescript
import { PassiveScanConfigConstruct } from 'zap-cdk'

new PassiveScanConfigConstruct(scope: Construct, id: string, props: IPassiveScanConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which this construct is defined. |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | - The ID of the construct. |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#zap-cdk.IPassiveScanConfigProps">IPassiveScanConfigProps</a></code> | - The properties of the passive scan configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.id"></a>

- *Type:* string

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="zap-cdk.PassiveScanConfigConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanConfigProps">IPassiveScanConfigProps</a>

The properties of the passive scan configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.toYaml">toYaml</a></code> | Converts the passive scan configuration to YAML format. |

---

##### `toString` <a name="toString" id="zap-cdk.PassiveScanConfigConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toYaml` <a name="toYaml" id="zap-cdk.PassiveScanConfigConstruct.toYaml"></a>

```typescript
public toYaml(): IPassiveScanConfig
```

Converts the passive scan configuration to YAML format.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="zap-cdk.PassiveScanConfigConstruct.isConstruct"></a>

```typescript
import { PassiveScanConfigConstruct } from 'zap-cdk'

PassiveScanConfigConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="zap-cdk.PassiveScanConfigConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#zap-cdk.PassiveScanConfigConstruct.property.config">config</a></code> | <code><a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="zap-cdk.PassiveScanConfigConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="zap-cdk.PassiveScanConfigConstruct.property.config"></a>

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

## Classes <a name="Classes" id="Classes"></a>

### ActiveScan <a name="ActiveScan" id="zap-cdk.ActiveScan"></a>

- *Implements:* <a href="#zap-cdk.IActiveScan">IActiveScan</a>

Class representing an active scan configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScan.Initializer"></a>

```typescript
import { ActiveScan } from 'zap-cdk'

new ActiveScan(options: IActiveScan)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScan.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScan">IActiveScan</a></code> | - The active scan configuration details. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ActiveScan.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScan">IActiveScan</a>

The active scan configuration details.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScan.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScan.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScan.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScan.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScan.property.policyDefinition">policyDefinition</a></code> | <code><a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a></code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ActiveScan.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ActiveScan.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.ActiveScan.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ActiveScan.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="zap-cdk.ActiveScan.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>

---


### ActiveScanConfig <a name="ActiveScanConfig" id="zap-cdk.ActiveScanConfig"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>

Class representing the configuration for an active scan.

*Example*

```typescript
const activeScanConfig = new ActiveScanConfig({
  parameters: new ActiveScanConfigParameters(),
  excludePaths: ['^/api/health$', '^/static/.*$'],
  enabled: true,
  alwaysRun: false
});
console.log(activeScanConfig.type); // 'activeScan-config'
```


#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanConfig.Initializer"></a>

```typescript
import { ActiveScanConfig } from 'zap-cdk'

new ActiveScanConfig(options: IActiveScanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a></code> | - The configuration options for the active scan. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ActiveScanConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>

The configuration options for the active scan.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfig.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfig.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfig.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfig.property.excludePaths">excludePaths</a></code> | <code>string[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ActiveScanConfig.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanConfigParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ActiveScanConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.ActiveScanConfig.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ActiveScanConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="zap-cdk.ActiveScanConfig.property.excludePaths"></a>

```typescript
public readonly excludePaths: string[];
```

- *Type:* string[]

---


### ActiveScanConfigParameters <a name="ActiveScanConfigParameters" id="zap-cdk.ActiveScanConfigParameters"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>

Class representing the parameters for configuring an active scan.

*Example*

```typescript
const activeScanConfig = new ActiveScanConfigParameters({
  maxRuleDurationInMins: 0,
  maxScanDurationInMins: 0,
  maxAlertsPerRule: 0,
  defaultPolicy: 'Default Policy',
  handleAntiCSRFTokens: false,
  injectPluginIdInHeader: false,
  threadPerHost: 4,
  inputVectors: new InputVectors()
});
console.log(activeScanConfig.defaultPolicy); // 'Default Policy'
```


#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanConfigParameters.Initializer"></a>

```typescript
import { ActiveScanConfigParameters } from 'zap-cdk'

new ActiveScanConfigParameters(options?: IActiveScanConfigParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a></code> | - The configuration options for the active scan. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.ActiveScanConfigParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>

The configuration options for the active scan.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.inputVectors">inputVectors</a></code> | <code><a href="#zap-cdk.IInputVectors">IInputVectors</a></code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.handleAntiCSRFTokens">handleAntiCSRFTokens</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.injectPluginIdInHeader">injectPluginIdInHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.maxRuleDurationInMins">maxRuleDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.maxScanDurationInMins">maxScanDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanConfigParameters.property.threadPerHost">threadPerHost</a></code> | <code>number</code> | *No description.* |

---

##### `inputVectors`<sup>Required</sup> <a name="inputVectors" id="zap-cdk.ActiveScanConfigParameters.property.inputVectors"></a>

```typescript
public readonly inputVectors: IInputVectors;
```

- *Type:* <a href="#zap-cdk.IInputVectors">IInputVectors</a>

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="zap-cdk.ActiveScanConfigParameters.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `handleAntiCSRFTokens`<sup>Optional</sup> <a name="handleAntiCSRFTokens" id="zap-cdk.ActiveScanConfigParameters.property.handleAntiCSRFTokens"></a>

```typescript
public readonly handleAntiCSRFTokens: boolean;
```

- *Type:* boolean

---

##### `injectPluginIdInHeader`<sup>Optional</sup> <a name="injectPluginIdInHeader" id="zap-cdk.ActiveScanConfigParameters.property.injectPluginIdInHeader"></a>

```typescript
public readonly injectPluginIdInHeader: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.ActiveScanConfigParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxRuleDurationInMins`<sup>Optional</sup> <a name="maxRuleDurationInMins" id="zap-cdk.ActiveScanConfigParameters.property.maxRuleDurationInMins"></a>

```typescript
public readonly maxRuleDurationInMins: number;
```

- *Type:* number

---

##### `maxScanDurationInMins`<sup>Optional</sup> <a name="maxScanDurationInMins" id="zap-cdk.ActiveScanConfigParameters.property.maxScanDurationInMins"></a>

```typescript
public readonly maxScanDurationInMins: number;
```

- *Type:* number

---

##### `threadPerHost`<sup>Optional</sup> <a name="threadPerHost" id="zap-cdk.ActiveScanConfigParameters.property.threadPerHost"></a>

```typescript
public readonly threadPerHost: number;
```

- *Type:* number

---


### ActiveScanParameters <a name="ActiveScanParameters" id="zap-cdk.ActiveScanParameters"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>

Class representing parameters for an active scan.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanParameters.Initializer"></a>

```typescript
import { ActiveScanParameters } from 'zap-cdk'

new ActiveScanParameters(options?: IActiveScanParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a></code> | - The parameters for the active scan. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.ActiveScanParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>

The parameters for the active scan.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanParameters.property.addQueryParam">addQueryParam</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.delayInMs">delayInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.handleAntiCSRFTokens">handleAntiCSRFTokens</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.injectPluginIdInHeader">injectPluginIdInHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.maxRuleDurationInMins">maxRuleDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.maxScanDurationInMins">maxScanDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.scanHeadersAllRequests">scanHeadersAllRequests</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.tests">tests</a></code> | <code><a href="#zap-cdk.IAlertTest">IAlertTest</a> \| <a href="#zap-cdk.IMonitorTest">IMonitorTest</a> \| <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a> \| <a href="#zap-cdk.IUrlTest">IUrlTest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.threadPerHost">threadPerHost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanParameters.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `addQueryParam`<sup>Optional</sup> <a name="addQueryParam" id="zap-cdk.ActiveScanParameters.property.addQueryParam"></a>

```typescript
public readonly addQueryParam: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.ActiveScanParameters.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `defaultPolicy`<sup>Optional</sup> <a name="defaultPolicy" id="zap-cdk.ActiveScanParameters.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `delayInMs`<sup>Optional</sup> <a name="delayInMs" id="zap-cdk.ActiveScanParameters.property.delayInMs"></a>

```typescript
public readonly delayInMs: number;
```

- *Type:* number

---

##### `handleAntiCSRFTokens`<sup>Optional</sup> <a name="handleAntiCSRFTokens" id="zap-cdk.ActiveScanParameters.property.handleAntiCSRFTokens"></a>

```typescript
public readonly handleAntiCSRFTokens: boolean;
```

- *Type:* boolean

---

##### `injectPluginIdInHeader`<sup>Optional</sup> <a name="injectPluginIdInHeader" id="zap-cdk.ActiveScanParameters.property.injectPluginIdInHeader"></a>

```typescript
public readonly injectPluginIdInHeader: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.ActiveScanParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxRuleDurationInMins`<sup>Optional</sup> <a name="maxRuleDurationInMins" id="zap-cdk.ActiveScanParameters.property.maxRuleDurationInMins"></a>

```typescript
public readonly maxRuleDurationInMins: number;
```

- *Type:* number

---

##### `maxScanDurationInMins`<sup>Optional</sup> <a name="maxScanDurationInMins" id="zap-cdk.ActiveScanParameters.property.maxScanDurationInMins"></a>

```typescript
public readonly maxScanDurationInMins: number;
```

- *Type:* number

---

##### `policy`<sup>Optional</sup> <a name="policy" id="zap-cdk.ActiveScanParameters.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `scanHeadersAllRequests`<sup>Optional</sup> <a name="scanHeadersAllRequests" id="zap-cdk.ActiveScanParameters.property.scanHeadersAllRequests"></a>

```typescript
public readonly scanHeadersAllRequests: boolean;
```

- *Type:* boolean

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.ActiveScanParameters.property.tests"></a>

```typescript
public readonly tests: IAlertTest | IMonitorTest | IStatisticsTest | IUrlTest[];
```

- *Type:* <a href="#zap-cdk.IAlertTest">IAlertTest</a> | <a href="#zap-cdk.IMonitorTest">IMonitorTest</a> | <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a> | <a href="#zap-cdk.IUrlTest">IUrlTest</a>[]

---

##### `threadPerHost`<sup>Optional</sup> <a name="threadPerHost" id="zap-cdk.ActiveScanParameters.property.threadPerHost"></a>

```typescript
public readonly threadPerHost: number;
```

- *Type:* number

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.ActiveScanParameters.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.ActiveScanParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---


### ActiveScanPolicy <a name="ActiveScanPolicy" id="zap-cdk.ActiveScanPolicy"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>

Class representing an active scan policy configuration.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanPolicy.Initializer"></a>

```typescript
import { ActiveScanPolicy } from 'zap-cdk'

new ActiveScanPolicy(options: IActiveScanPolicy)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicy.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a></code> | - The configuration options for the active scan policy. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ActiveScanPolicy.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>

The configuration options for the active scan policy.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicy.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicy.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicy.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ActiveScanPolicy.property.parameters"></a>

```typescript
public readonly parameters: IActiveScanPolicyParameters;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ActiveScanPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.ActiveScanPolicy.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ActiveScanPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---


### ActiveScanPolicyDefinition <a name="ActiveScanPolicyDefinition" id="zap-cdk.ActiveScanPolicyDefinition"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>

Class representing the policy definition for an active scan.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanPolicyDefinition.Initializer"></a>

```typescript
import { ActiveScanPolicyDefinition } from 'zap-cdk'

new ActiveScanPolicyDefinition(options: IActiveScanPolicyDefinition)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a></code> | - The configuration options for the policy definition. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ActiveScanPolicyDefinition.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>

The configuration options for the policy definition.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.property.createdAt">createdAt</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.property.updatedAt">updatedAt</a></code> | <code>Date</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicyDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="zap-cdk.ActiveScanPolicyDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: Date;
```

- *Type:* Date

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.ActiveScanPolicyDefinition.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.ActiveScanPolicyDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="zap-cdk.ActiveScanPolicyDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: Date;
```

- *Type:* Date

---

##### `description`<sup>Optional</sup> <a name="description" id="zap-cdk.ActiveScanPolicyDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### ActiveScanPolicyParameters <a name="ActiveScanPolicyParameters" id="zap-cdk.ActiveScanPolicyParameters"></a>

- *Implements:* <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>

Class representing the parameters for an active scan policy.

#### Initializers <a name="Initializers" id="zap-cdk.ActiveScanPolicyParameters.Initializer"></a>

```typescript
import { ActiveScanPolicyParameters } from 'zap-cdk'

new ActiveScanPolicyParameters(options: IActiveScanPolicyParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a></code> | - The configuration options for the active scan policy parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ActiveScanPolicyParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>

The configuration options for the active scan policy parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ActiveScanPolicyParameters.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ActiveScanPolicyParameters.property.policyDefinition">policyDefinition</a></code> | <code><a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.ActiveScanPolicyParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="zap-cdk.ActiveScanPolicyParameters.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IActiveScanPolicyDefinition;
```

- *Type:* <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>

---


### AjaxTest <a name="AjaxTest" id="zap-cdk.AjaxTest"></a>

- *Implements:* <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>

#### Initializers <a name="Initializers" id="zap-cdk.AjaxTest.Initializer"></a>

```typescript
import { AjaxTest } from 'zap-cdk'

new AjaxTest(options: IAjaxTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AjaxTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAjaxTest">IAjaxTest</a></code> | - The options to initialize the AJAX test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AjaxTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>

The options to initialize the AJAX test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AjaxTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AjaxTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AjaxTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AjaxTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AjaxTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.AjaxTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.AjaxTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.AjaxTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.AjaxTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.AjaxTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.AjaxTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `onFail`<sup>Optional</sup> <a name="onFail" id="zap-cdk.AjaxTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---


### AlertFilter <a name="AlertFilter" id="zap-cdk.AlertFilter"></a>

- *Implements:* <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>

Class representing a filter for alerts in the scanning process.

*Example*

```typescript
const alertFilter = new AlertFilter({
  ruleId: 10010,
  newRisk: 'Low',
  context: 'MyContext',
  url: '.*example.*',
  urlRegex: true,
  parameter: 'sessionid',
  parameterRegex: false,
  attack: 'SQL Injection',
  attackRegex: false,
  evidence: 'SELECT',
  evidenceRegex: true
});
```


#### Initializers <a name="Initializers" id="zap-cdk.AlertFilter.Initializer"></a>

```typescript
import { AlertFilter } from 'zap-cdk'

new AlertFilter(options: IAlertFilter)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertFilter.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAlertFilter">IAlertFilter</a></code> | - The configuration options for the alert filter. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AlertFilter.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>

The configuration options for the alert filter.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertFilter.property.newRisk">newRisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.ruleId">ruleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.attack">attack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.attackRegex">attackRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.evidence">evidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.evidenceRegex">evidenceRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.parameterRegex">parameterRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilter.property.urlRegex">urlRegex</a></code> | <code>boolean</code> | *No description.* |

---

##### `newRisk`<sup>Required</sup> <a name="newRisk" id="zap-cdk.AlertFilter.property.newRisk"></a>

```typescript
public readonly newRisk: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="zap-cdk.AlertFilter.property.ruleId"></a>

```typescript
public readonly ruleId: number;
```

- *Type:* number

---

##### `attack`<sup>Optional</sup> <a name="attack" id="zap-cdk.AlertFilter.property.attack"></a>

```typescript
public readonly attack: string;
```

- *Type:* string

---

##### `attackRegex`<sup>Optional</sup> <a name="attackRegex" id="zap-cdk.AlertFilter.property.attackRegex"></a>

```typescript
public readonly attackRegex: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.AlertFilter.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `evidence`<sup>Optional</sup> <a name="evidence" id="zap-cdk.AlertFilter.property.evidence"></a>

```typescript
public readonly evidence: string;
```

- *Type:* string

---

##### `evidenceRegex`<sup>Optional</sup> <a name="evidenceRegex" id="zap-cdk.AlertFilter.property.evidenceRegex"></a>

```typescript
public readonly evidenceRegex: boolean;
```

- *Type:* boolean

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="zap-cdk.AlertFilter.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterRegex`<sup>Optional</sup> <a name="parameterRegex" id="zap-cdk.AlertFilter.property.parameterRegex"></a>

```typescript
public readonly parameterRegex: boolean;
```

- *Type:* boolean

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.AlertFilter.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="zap-cdk.AlertFilter.property.urlRegex"></a>

```typescript
public readonly urlRegex: boolean;
```

- *Type:* boolean

---


### AlertFilterParameters <a name="AlertFilterParameters" id="zap-cdk.AlertFilterParameters"></a>

- *Implements:* <a href="#zap-cdk.IAlertFilterParameters">IAlertFilterParameters</a>

#### Initializers <a name="Initializers" id="zap-cdk.AlertFilterParameters.Initializer"></a>

```typescript
import { AlertFilterParameters } from 'zap-cdk'

new AlertFilterParameters(options: IAlertFilterParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertFilterParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAlertFilterParameters">IAlertFilterParameters</a></code> | - The configuration options for the alert filter parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AlertFilterParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAlertFilterParameters">IAlertFilterParameters</a>

The configuration options for the alert filter parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertFilterParameters.property.alertFilters">alertFilters</a></code> | <code><a href="#zap-cdk.IAlertFilter">IAlertFilter</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.AlertFilterParameters.property.deleteGlobalAlerts">deleteGlobalAlerts</a></code> | <code>boolean</code> | *No description.* |

---

##### `alertFilters`<sup>Required</sup> <a name="alertFilters" id="zap-cdk.AlertFilterParameters.property.alertFilters"></a>

```typescript
public readonly alertFilters: IAlertFilter[];
```

- *Type:* <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>[]

---

##### `deleteGlobalAlerts`<sup>Optional</sup> <a name="deleteGlobalAlerts" id="zap-cdk.AlertFilterParameters.property.deleteGlobalAlerts"></a>

```typescript
public readonly deleteGlobalAlerts: boolean;
```

- *Type:* boolean

---


### AlertTag <a name="AlertTag" id="zap-cdk.AlertTag"></a>

- *Implements:* <a href="#zap-cdk.IAlertTag">IAlertTag</a>

Class representing the configuration for alert tags.

#### Initializers <a name="Initializers" id="zap-cdk.AlertTag.Initializer"></a>

```typescript
import { AlertTag } from 'zap-cdk'

new AlertTag(options?: IAlertTag)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTag.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAlertTag">IAlertTag</a></code> | - The configuration options for alert tags. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.AlertTag.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAlertTag">IAlertTag</a>

The configuration options for alert tags.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTag.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTag.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTag.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTag.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="zap-cdk.AlertTag.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Optional</sup> <a name="include" id="zap-cdk.AlertTag.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.AlertTag.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.AlertTag.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---


### AlertTags <a name="AlertTags" id="zap-cdk.AlertTags"></a>

- *Implements:* <a href="#zap-cdk.IAlertTags">IAlertTags</a>

Class representing the configuration for alert tags.

#### Initializers <a name="Initializers" id="zap-cdk.AlertTags.Initializer"></a>

```typescript
import { AlertTags } from 'zap-cdk'

new AlertTags(options: IAlertTags)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTags.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAlertTags">IAlertTags</a></code> | - The configuration for alert tags. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AlertTags.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAlertTags">IAlertTags</a>

The configuration for alert tags.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTags.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTags.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTags.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTags.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="zap-cdk.AlertTags.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="zap-cdk.AlertTags.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.AlertTags.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.AlertTags.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---


### AlertTest <a name="AlertTest" id="zap-cdk.AlertTest"></a>

- *Implements:* <a href="#zap-cdk.IAlertTest">IAlertTest</a>

#### Initializers <a name="Initializers" id="zap-cdk.AlertTest.Initializer"></a>

```typescript
import { AlertTest } from 'zap-cdk'

new AlertTest(options: IAlertTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAlertTest">IAlertTest</a></code> | - The configuration options for the alert test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AlertTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAlertTest">IAlertTest</a>

The configuration options for the alert test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AlertTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.scanRuleId">scanRuleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.alertName">alertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.attack">attack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.confidence">confidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.evidence">evidence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.param">param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.risk">risk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AlertTest.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.AlertTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `scanRuleId`<sup>Required</sup> <a name="scanRuleId" id="zap-cdk.AlertTest.property.scanRuleId"></a>

```typescript
public readonly scanRuleId: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.AlertTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `action`<sup>Optional</sup> <a name="action" id="zap-cdk.AlertTest.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `alertName`<sup>Optional</sup> <a name="alertName" id="zap-cdk.AlertTest.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

---

##### `attack`<sup>Optional</sup> <a name="attack" id="zap-cdk.AlertTest.property.attack"></a>

```typescript
public readonly attack: string;
```

- *Type:* string

---

##### `confidence`<sup>Optional</sup> <a name="confidence" id="zap-cdk.AlertTest.property.confidence"></a>

```typescript
public readonly confidence: string;
```

- *Type:* string

---

##### `evidence`<sup>Optional</sup> <a name="evidence" id="zap-cdk.AlertTest.property.evidence"></a>

```typescript
public readonly evidence: string;
```

- *Type:* string

---

##### `method`<sup>Optional</sup> <a name="method" id="zap-cdk.AlertTest.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.AlertTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `param`<sup>Optional</sup> <a name="param" id="zap-cdk.AlertTest.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

---

##### `risk`<sup>Optional</sup> <a name="risk" id="zap-cdk.AlertTest.property.risk"></a>

```typescript
public readonly risk: string;
```

- *Type:* string

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.AlertTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---


### AuthenticationParameters <a name="AuthenticationParameters" id="zap-cdk.AuthenticationParameters"></a>

- *Implements:* <a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a>

Represents the parameters for authentication in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.AuthenticationParameters.Initializer"></a>

```typescript
import { AuthenticationParameters } from 'zap-cdk'

new AuthenticationParameters(options: IAuthenticationParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a></code> | - The options to initialize the authentication parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AuthenticationParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a>

The options to initialize the authentication parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParameters.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParameters.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParameters.property.verification">verification</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a></code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.AuthenticationParameters.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.AuthenticationParameters.property.parameters"></a>

```typescript
public readonly parameters: IAuthenticationParametersParameters;
```

- *Type:* <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="zap-cdk.AuthenticationParameters.property.verification"></a>

```typescript
public readonly verification: IAuthenticationParametersVerification;
```

- *Type:* <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>

---


### AuthenticationParametersParameters <a name="AuthenticationParametersParameters" id="zap-cdk.AuthenticationParametersParameters"></a>

- *Implements:* <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>

Represents the parameters for authentication in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.AuthenticationParametersParameters.Initializer"></a>

```typescript
import { AuthenticationParametersParameters } from 'zap-cdk'

new AuthenticationParametersParameters(options?: IAuthenticationParametersParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a></code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.AuthenticationParametersParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.loginPageUrl">loginPageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.loginRequestBody">loginRequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.loginRequestUrl">loginRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.realm">realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.scriptEngine">scriptEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersParameters.property.scriptInline">scriptInline</a></code> | <code>string</code> | *No description.* |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="zap-cdk.AuthenticationParametersParameters.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `loginPageUrl`<sup>Optional</sup> <a name="loginPageUrl" id="zap-cdk.AuthenticationParametersParameters.property.loginPageUrl"></a>

```typescript
public readonly loginPageUrl: string;
```

- *Type:* string

---

##### `loginRequestBody`<sup>Optional</sup> <a name="loginRequestBody" id="zap-cdk.AuthenticationParametersParameters.property.loginRequestBody"></a>

```typescript
public readonly loginRequestBody: string;
```

- *Type:* string

---

##### `loginRequestUrl`<sup>Optional</sup> <a name="loginRequestUrl" id="zap-cdk.AuthenticationParametersParameters.property.loginRequestUrl"></a>

```typescript
public readonly loginRequestUrl: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="zap-cdk.AuthenticationParametersParameters.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `realm`<sup>Optional</sup> <a name="realm" id="zap-cdk.AuthenticationParametersParameters.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

##### `script`<sup>Optional</sup> <a name="script" id="zap-cdk.AuthenticationParametersParameters.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptEngine`<sup>Optional</sup> <a name="scriptEngine" id="zap-cdk.AuthenticationParametersParameters.property.scriptEngine"></a>

```typescript
public readonly scriptEngine: string;
```

- *Type:* string

---

##### `scriptInline`<sup>Optional</sup> <a name="scriptInline" id="zap-cdk.AuthenticationParametersParameters.property.scriptInline"></a>

```typescript
public readonly scriptInline: string;
```

- *Type:* string

---


### AuthenticationParametersVerification <a name="AuthenticationParametersVerification" id="zap-cdk.AuthenticationParametersVerification"></a>

- *Implements:* <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>

Represents the verification details for authentication in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.AuthenticationParametersVerification.Initializer"></a>

```typescript
import { AuthenticationParametersVerification } from 'zap-cdk'

new AuthenticationParametersVerification(options: IAuthenticationParametersVerification)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a></code> | - The options to initialize the verification details. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.AuthenticationParametersVerification.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>

The options to initialize the verification details.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.loggedInRegex">loggedInRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.loggedOutRegex">loggedOutRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.pollAdditionalHeaders">pollAdditionalHeaders</a></code> | <code><a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.pollFrequency">pollFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.pollPostData">pollPostData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.pollUnits">pollUnits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.AuthenticationParametersVerification.property.pollUrl">pollUrl</a></code> | <code>string</code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.AuthenticationParametersVerification.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `loggedInRegex`<sup>Optional</sup> <a name="loggedInRegex" id="zap-cdk.AuthenticationParametersVerification.property.loggedInRegex"></a>

```typescript
public readonly loggedInRegex: string;
```

- *Type:* string

---

##### `loggedOutRegex`<sup>Optional</sup> <a name="loggedOutRegex" id="zap-cdk.AuthenticationParametersVerification.property.loggedOutRegex"></a>

```typescript
public readonly loggedOutRegex: string;
```

- *Type:* string

---

##### `pollAdditionalHeaders`<sup>Optional</sup> <a name="pollAdditionalHeaders" id="zap-cdk.AuthenticationParametersVerification.property.pollAdditionalHeaders"></a>

```typescript
public readonly pollAdditionalHeaders: IPollAdditionalHeaders[];
```

- *Type:* <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>[]

---

##### `pollFrequency`<sup>Optional</sup> <a name="pollFrequency" id="zap-cdk.AuthenticationParametersVerification.property.pollFrequency"></a>

```typescript
public readonly pollFrequency: number;
```

- *Type:* number

---

##### `pollPostData`<sup>Optional</sup> <a name="pollPostData" id="zap-cdk.AuthenticationParametersVerification.property.pollPostData"></a>

```typescript
public readonly pollPostData: string;
```

- *Type:* string

---

##### `pollUnits`<sup>Optional</sup> <a name="pollUnits" id="zap-cdk.AuthenticationParametersVerification.property.pollUnits"></a>

```typescript
public readonly pollUnits: string;
```

- *Type:* string

---

##### `pollUrl`<sup>Optional</sup> <a name="pollUrl" id="zap-cdk.AuthenticationParametersVerification.property.pollUrl"></a>

```typescript
public readonly pollUrl: string;
```

- *Type:* string

---


### ContextStructure <a name="ContextStructure" id="zap-cdk.ContextStructure"></a>

- *Implements:* <a href="#zap-cdk.IContextStructure">IContextStructure</a>

Represents the structure details of the context.

#### Initializers <a name="Initializers" id="zap-cdk.ContextStructure.Initializer"></a>

```typescript
import { ContextStructure } from 'zap-cdk'

new ContextStructure(options: IContextStructure)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ContextStructure.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IContextStructure">IContextStructure</a></code> | - The options to initialize the context structure. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ContextStructure.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IContextStructure">IContextStructure</a>

The options to initialize the context structure.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ContextStructure.property.dataDrivenNodes">dataDrivenNodes</a></code> | <code><a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.ContextStructure.property.structuralParameters">structuralParameters</a></code> | <code>string[]</code> | *No description.* |

---

##### `dataDrivenNodes`<sup>Optional</sup> <a name="dataDrivenNodes" id="zap-cdk.ContextStructure.property.dataDrivenNodes"></a>

```typescript
public readonly dataDrivenNodes: IDataDrivenNode[];
```

- *Type:* <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>[]

---

##### `structuralParameters`<sup>Optional</sup> <a name="structuralParameters" id="zap-cdk.ContextStructure.property.structuralParameters"></a>

```typescript
public readonly structuralParameters: string[];
```

- *Type:* string[]

---


### ContextUser <a name="ContextUser" id="zap-cdk.ContextUser"></a>

- *Implements:* <a href="#zap-cdk.IContextUser">IContextUser</a>

Represents a user in the context.

#### Initializers <a name="Initializers" id="zap-cdk.ContextUser.Initializer"></a>

```typescript
import { ContextUser } from 'zap-cdk'

new ContextUser(options: IContextUser)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ContextUser.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IContextUser">IContextUser</a></code> | - The options to initialize the context user. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ContextUser.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IContextUser">IContextUser</a>

The options to initialize the context user.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ContextUser.property.credentials">credentials</a></code> | <code><a href="#zap-cdk.IUserCredentials">IUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.ContextUser.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="zap-cdk.ContextUser.property.credentials"></a>

```typescript
public readonly credentials: IUserCredentials[];
```

- *Type:* <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.ContextUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### CookieData <a name="CookieData" id="zap-cdk.CookieData"></a>

- *Implements:* <a href="#zap-cdk.ICookieData">ICookieData</a>

Class representing the configuration for cookie data scanning.

*Example*

```typescript
const cookieConfig = new CookieData({ enabled: false, encodeCookieValues: false });
console.log(cookieConfig.enabled); // false
```


#### Initializers <a name="Initializers" id="zap-cdk.CookieData.Initializer"></a>

```typescript
import { CookieData } from 'zap-cdk'

new CookieData(options?: ICookieData)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.CookieData.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ICookieData">ICookieData</a></code> | - The configuration options for cookie data scanning. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.CookieData.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ICookieData">ICookieData</a>

The configuration options for cookie data scanning.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.CookieData.property.enabled">enabled</a></code> | <code>boolean</code> | If cookie scanning is enabled. |
| <code><a href="#zap-cdk.CookieData.property.encodeCookieValues">encodeCookieValues</a></code> | <code>boolean</code> | If cookie values should be encoded. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.CookieData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If cookie scanning is enabled.

Default: false

---

##### `encodeCookieValues`<sup>Optional</sup> <a name="encodeCookieValues" id="zap-cdk.CookieData.property.encodeCookieValues"></a>

```typescript
public readonly encodeCookieValues: boolean;
```

- *Type:* boolean

If cookie values should be encoded.

Default: false

---


### DataDrivenNode <a name="DataDrivenNode" id="zap-cdk.DataDrivenNode"></a>

- *Implements:* <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>

Represents a data-driven node in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.DataDrivenNode.Initializer"></a>

```typescript
import { DataDrivenNode } from 'zap-cdk'

new DataDrivenNode(options: IDataDrivenNode)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DataDrivenNode.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a></code> | - The options to initialize the data-driven node. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.DataDrivenNode.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>

The options to initialize the data-driven node.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DataDrivenNode.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.DataDrivenNode.property.regex">regex</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="zap-cdk.DataDrivenNode.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="zap-cdk.DataDrivenNode.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---


### Delay <a name="Delay" id="zap-cdk.Delay"></a>

- *Implements:* <a href="#zap-cdk.IDelay">IDelay</a>

#### Initializers <a name="Initializers" id="zap-cdk.Delay.Initializer"></a>

```typescript
import { Delay } from 'zap-cdk'

new Delay(parameters: IDelayParameters, enabled?: boolean, alwaysRun?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Delay.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#zap-cdk.IDelayParameters">IDelayParameters</a></code> | - The parameters for the delay configuration. |
| <code><a href="#zap-cdk.Delay.Initializer.parameter.enabled">enabled</a></code> | <code>boolean</code> | - If set to false the job will not be run, default: true. |
| <code><a href="#zap-cdk.Delay.Initializer.parameter.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | - If set and the job is enabled then it will run even if the plan exits early, default: false. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.Delay.Initializer.parameter.parameters"></a>

- *Type:* <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>

The parameters for the delay configuration.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.Delay.Initializer.parameter.enabled"></a>

- *Type:* boolean

If set to false the job will not be run, default: true.

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.Delay.Initializer.parameter.alwaysRun"></a>

- *Type:* boolean

If set and the job is enabled then it will run even if the plan exits early, default: false.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Delay.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IDelayParameters">IDelayParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.Delay.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Delay.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.Delay.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.Delay.property.parameters"></a>

```typescript
public readonly parameters: IDelayParameters;
```

- *Type:* <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.Delay.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.Delay.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.Delay.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---


### DelayParameters <a name="DelayParameters" id="zap-cdk.DelayParameters"></a>

- *Implements:* <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>

#### Initializers <a name="Initializers" id="zap-cdk.DelayParameters.Initializer"></a>

```typescript
import { DelayParameters } from 'zap-cdk'

new DelayParameters(time?: string, fileName?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DelayParameters.Initializer.parameter.time">time</a></code> | <code>string</code> | - The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0. |
| <code><a href="#zap-cdk.DelayParameters.Initializer.parameter.fileName">fileName</a></code> | <code>string</code> | - Name of a file which will cause the job to end early if created, default: empty. |

---

##### `time`<sup>Optional</sup> <a name="time" id="zap-cdk.DelayParameters.Initializer.parameter.time"></a>

- *Type:* string

The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="zap-cdk.DelayParameters.Initializer.parameter.fileName"></a>

- *Type:* string

Name of a file which will cause the job to end early if created, default: empty.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.DelayParameters.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.DelayParameters.property.time">time</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="zap-cdk.DelayParameters.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `time`<sup>Optional</sup> <a name="time" id="zap-cdk.DelayParameters.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---


### ExcludedElement <a name="ExcludedElement" id="zap-cdk.ExcludedElement"></a>

- *Implements:* <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>

Class representing an excluded HTML element configuration.

*Example*

```typescript
const excludedElement = new ExcludedElement({
  description: 'Exclude login button',
  element: 'button',
  text: 'Login'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.ExcludedElement.Initializer"></a>

```typescript
import { ExcludedElement } from 'zap-cdk'

new ExcludedElement(options: IExcludedElement)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExcludedElement.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IExcludedElement">IExcludedElement</a></code> | - The options to initialize the excluded element. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ExcludedElement.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>

The options to initialize the excluded element.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExcludedElement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExcludedElement.property.element">element</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExcludedElement.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExcludedElement.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExcludedElement.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExcludedElement.property.xpath">xpath</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="zap-cdk.ExcludedElement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `element`<sup>Required</sup> <a name="element" id="zap-cdk.ExcludedElement.property.element"></a>

```typescript
public readonly element: string;
```

- *Type:* string

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="zap-cdk.ExcludedElement.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="zap-cdk.ExcludedElement.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `text`<sup>Optional</sup> <a name="text" id="zap-cdk.ExcludedElement.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `xpath`<sup>Optional</sup> <a name="xpath" id="zap-cdk.ExcludedElement.property.xpath"></a>

```typescript
public readonly xpath: string;
```

- *Type:* string

---


### ExitStatus <a name="ExitStatus" id="zap-cdk.ExitStatus"></a>

- *Implements:* <a href="#zap-cdk.IExitStatus">IExitStatus</a>

Represents the exit status configuration for the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.ExitStatus.Initializer"></a>

```typescript
import { ExitStatus } from 'zap-cdk'

new ExitStatus(options: IExitStatus)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatus.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IExitStatus">IExitStatus</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ExitStatus.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IExitStatus">IExitStatus</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatus.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatus.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatus.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatus.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.ExitStatus.property.parameters"></a>

```typescript
public readonly parameters: IExitStatusParameters;
```

- *Type:* <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.ExitStatus.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.ExitStatus.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.ExitStatus.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---


### ExitStatusParameters <a name="ExitStatusParameters" id="zap-cdk.ExitStatusParameters"></a>

- *Implements:* <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>

Represents the parameters for configuring exit status in the scanning process.

*Example*

```typescript
const exitStatusParams = new ExitStatusParameters({
  errorLevel: 'High',
  warnLevel: 'Medium',
  okExitValue: 0,
  errorExitValue: 1,
  warnExitValue: 2
});
```


#### Initializers <a name="Initializers" id="zap-cdk.ExitStatusParameters.Initializer"></a>

```typescript
import { ExitStatusParameters } from 'zap-cdk'

new ExitStatusParameters(options: IExitStatusParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatusParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a></code> | - The options to initialize the exit status parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ExitStatusParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>

The options to initialize the exit status parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ExitStatusParameters.property.errorExitValue">errorExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatusParameters.property.errorLevel">errorLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatusParameters.property.okExitValue">okExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatusParameters.property.warnExitValue">warnExitValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.ExitStatusParameters.property.warnLevel">warnLevel</a></code> | <code>string</code> | *No description.* |

---

##### `errorExitValue`<sup>Optional</sup> <a name="errorExitValue" id="zap-cdk.ExitStatusParameters.property.errorExitValue"></a>

```typescript
public readonly errorExitValue: number;
```

- *Type:* number

---

##### `errorLevel`<sup>Optional</sup> <a name="errorLevel" id="zap-cdk.ExitStatusParameters.property.errorLevel"></a>

```typescript
public readonly errorLevel: string;
```

- *Type:* string

---

##### `okExitValue`<sup>Optional</sup> <a name="okExitValue" id="zap-cdk.ExitStatusParameters.property.okExitValue"></a>

```typescript
public readonly okExitValue: number;
```

- *Type:* number

---

##### `warnExitValue`<sup>Optional</sup> <a name="warnExitValue" id="zap-cdk.ExitStatusParameters.property.warnExitValue"></a>

```typescript
public readonly warnExitValue: number;
```

- *Type:* number

---

##### `warnLevel`<sup>Optional</sup> <a name="warnLevel" id="zap-cdk.ExitStatusParameters.property.warnLevel"></a>

```typescript
public readonly warnLevel: string;
```

- *Type:* string

---


### Export <a name="Export" id="zap-cdk.Export"></a>

- *Implements:* <a href="#zap-cdk.IExport">IExport</a>

Class representing an export operation.

*Example*

```typescript
const exportConfig = new Export({
  fileName: 'export.har',
  type: 'har',
  source: 'history',
  context: 'MyContext'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Export.Initializer"></a>

```typescript
import { Export } from 'zap-cdk'

new Export(options: IExport)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Export.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IExport">IExport</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Export.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IExport">IExport</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Export.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Export.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Export.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Export.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="zap-cdk.Export.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.Export.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `source`<sup>Optional</sup> <a name="source" id="zap-cdk.Export.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Optional</sup> <a name="type" id="zap-cdk.Export.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### GraphQL <a name="GraphQL" id="zap-cdk.GraphQL"></a>

- *Implements:* <a href="#zap-cdk.IGraphQL">IGraphQL</a>

#### Initializers <a name="Initializers" id="zap-cdk.GraphQL.Initializer"></a>

```typescript
import { GraphQL } from 'zap-cdk'

new GraphQL(options: IGraphQL)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.GraphQL.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IGraphQL">IGraphQL</a></code> | - The options to initialize the GraphQL configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.GraphQL.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IGraphQL">IGraphQL</a>

The options to initialize the GraphQL configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.GraphQL.property.argsType">argsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.lenientMaxQueryDepthEnabled">lenientMaxQueryDepthEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.maxAdditionalQueryDepth">maxAdditionalQueryDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.maxArgsDepth">maxArgsDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.maxQueryDepth">maxQueryDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.optionalArgsEnabled">optionalArgsEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.queryGenEnabled">queryGenEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.querySplitType">querySplitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.schemaFile">schemaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.GraphQL.property.schemaUrl">schemaUrl</a></code> | <code>string</code> | *No description.* |

---

##### `argsType`<sup>Optional</sup> <a name="argsType" id="zap-cdk.GraphQL.property.argsType"></a>

```typescript
public readonly argsType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="zap-cdk.GraphQL.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `lenientMaxQueryDepthEnabled`<sup>Optional</sup> <a name="lenientMaxQueryDepthEnabled" id="zap-cdk.GraphQL.property.lenientMaxQueryDepthEnabled"></a>

```typescript
public readonly lenientMaxQueryDepthEnabled: boolean;
```

- *Type:* boolean

---

##### `maxAdditionalQueryDepth`<sup>Optional</sup> <a name="maxAdditionalQueryDepth" id="zap-cdk.GraphQL.property.maxAdditionalQueryDepth"></a>

```typescript
public readonly maxAdditionalQueryDepth: number;
```

- *Type:* number

---

##### `maxArgsDepth`<sup>Optional</sup> <a name="maxArgsDepth" id="zap-cdk.GraphQL.property.maxArgsDepth"></a>

```typescript
public readonly maxArgsDepth: number;
```

- *Type:* number

---

##### `maxQueryDepth`<sup>Optional</sup> <a name="maxQueryDepth" id="zap-cdk.GraphQL.property.maxQueryDepth"></a>

```typescript
public readonly maxQueryDepth: number;
```

- *Type:* number

---

##### `optionalArgsEnabled`<sup>Optional</sup> <a name="optionalArgsEnabled" id="zap-cdk.GraphQL.property.optionalArgsEnabled"></a>

```typescript
public readonly optionalArgsEnabled: boolean;
```

- *Type:* boolean

---

##### `queryGenEnabled`<sup>Optional</sup> <a name="queryGenEnabled" id="zap-cdk.GraphQL.property.queryGenEnabled"></a>

```typescript
public readonly queryGenEnabled: boolean;
```

- *Type:* boolean

---

##### `querySplitType`<sup>Optional</sup> <a name="querySplitType" id="zap-cdk.GraphQL.property.querySplitType"></a>

```typescript
public readonly querySplitType: string;
```

- *Type:* string

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="zap-cdk.GraphQL.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `schemaFile`<sup>Optional</sup> <a name="schemaFile" id="zap-cdk.GraphQL.property.schemaFile"></a>

```typescript
public readonly schemaFile: string;
```

- *Type:* string

---

##### `schemaUrl`<sup>Optional</sup> <a name="schemaUrl" id="zap-cdk.GraphQL.property.schemaUrl"></a>

```typescript
public readonly schemaUrl: string;
```

- *Type:* string

---


### HttpHeaders <a name="HttpHeaders" id="zap-cdk.HttpHeaders"></a>

- *Implements:* <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

Class representing the configuration for HTTP header scanning.

*Example*

```typescript
const headerConfig = new HttpHeaders({ enabled: false, allRequests: false });
console.log(headerConfig.enabled); // false
```


#### Initializers <a name="Initializers" id="zap-cdk.HttpHeaders.Initializer"></a>

```typescript
import { HttpHeaders } from 'zap-cdk'

new HttpHeaders(options?: IHttpHeaders)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.HttpHeaders.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a></code> | - The configuration options for HTTP header scanning. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.HttpHeaders.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

The configuration options for HTTP header scanning.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.HttpHeaders.property.allRequests">allRequests</a></code> | <code>boolean</code> | If headers of requests without parameters should be scanned. |
| <code><a href="#zap-cdk.HttpHeaders.property.enabled">enabled</a></code> | <code>boolean</code> | If HTTP header scanning should be enabled. |

---

##### `allRequests`<sup>Optional</sup> <a name="allRequests" id="zap-cdk.HttpHeaders.property.allRequests"></a>

```typescript
public readonly allRequests: boolean;
```

- *Type:* boolean

If headers of requests without parameters should be scanned.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.HttpHeaders.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If HTTP header scanning should be enabled.

Default: false

---


### Import <a name="Import" id="zap-cdk.Import"></a>

- *Implements:* <a href="#zap-cdk.IImport">IImport</a>

#### Initializers <a name="Initializers" id="zap-cdk.Import.Initializer"></a>

```typescript
import { Import } from 'zap-cdk'

new Import(options: IImport)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Import.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IImport">IImport</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Import.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IImport">IImport</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Import.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Import.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="zap-cdk.Import.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.Import.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---


### InputVectors <a name="InputVectors" id="zap-cdk.InputVectors"></a>

- *Implements:* <a href="#zap-cdk.IInputVectors">IInputVectors</a>

Class representing the configuration for input vectors used in an active scan.

*Example*

```typescript
const inputVectorsConfig = new InputVectors({
  urlQueryStringAndDataDrivenNodes: new UrlQueryStringAndDataDrivenNodes(),
  postData: new PostData(),
```


#### Initializers <a name="Initializers" id="zap-cdk.InputVectors.Initializer"></a>

```typescript
import { InputVectors } from 'zap-cdk'

new InputVectors(options?: IInputVectors)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.InputVectors.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IInputVectors">IInputVectors</a></code> | - The configuration options for input vectors. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.InputVectors.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IInputVectors">IInputVectors</a>

The configuration options for input vectors.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.InputVectors.property.cookieData">cookieData</a></code> | <code><a href="#zap-cdk.ICookieData">ICookieData</a></code> | Configuration for cookie data scanning. |
| <code><a href="#zap-cdk.InputVectors.property.httpHeaders">httpHeaders</a></code> | <code><a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a></code> | Configuration for HTTP header scanning. |
| <code><a href="#zap-cdk.InputVectors.property.postData">postData</a></code> | <code><a href="#zap-cdk.IPostData">IPostData</a></code> | Configuration for POST data scanning. |
| <code><a href="#zap-cdk.InputVectors.property.urlQueryStringAndDataDrivenNodes">urlQueryStringAndDataDrivenNodes</a></code> | <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a></code> | Configuration for query parameters and data-driven nodes. |
| <code><a href="#zap-cdk.InputVectors.property.scripts">scripts</a></code> | <code>boolean</code> | If Input Vector scripts should be used. |
| <code><a href="#zap-cdk.InputVectors.property.urlPath">urlPath</a></code> | <code>boolean</code> | If URL path segments should be scanned. |

---

##### `cookieData`<sup>Required</sup> <a name="cookieData" id="zap-cdk.InputVectors.property.cookieData"></a>

```typescript
public readonly cookieData: ICookieData;
```

- *Type:* <a href="#zap-cdk.ICookieData">ICookieData</a>

Configuration for cookie data scanning.

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="zap-cdk.InputVectors.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IHttpHeaders;
```

- *Type:* <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

Configuration for HTTP header scanning.

---

##### `postData`<sup>Required</sup> <a name="postData" id="zap-cdk.InputVectors.property.postData"></a>

```typescript
public readonly postData: IPostData;
```

- *Type:* <a href="#zap-cdk.IPostData">IPostData</a>

Configuration for POST data scanning.

---

##### `urlQueryStringAndDataDrivenNodes`<sup>Required</sup> <a name="urlQueryStringAndDataDrivenNodes" id="zap-cdk.InputVectors.property.urlQueryStringAndDataDrivenNodes"></a>

```typescript
public readonly urlQueryStringAndDataDrivenNodes: IUrlQueryStringAndDataDrivenNodes;
```

- *Type:* <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

Configuration for query parameters and data-driven nodes.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="zap-cdk.InputVectors.property.scripts"></a>

```typescript
public readonly scripts: boolean;
```

- *Type:* boolean

If Input Vector scripts should be used.

Default: true

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="zap-cdk.InputVectors.property.urlPath"></a>

```typescript
public readonly urlPath: boolean;
```

- *Type:* boolean

If URL path segments should be scanned.

Default: false

---


### JsonPostData <a name="JsonPostData" id="zap-cdk.JsonPostData"></a>

- *Implements:* <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

Class representing the configuration for JSON body scanning in POST data.

*Example*

```typescript
const jsonConfig = new JsonPostData({ enabled: true, scanNullValues: false });
console.log(jsonConfig.enabled); // true
```


#### Initializers <a name="Initializers" id="zap-cdk.JsonPostData.Initializer"></a>

```typescript
import { JsonPostData } from 'zap-cdk'

new JsonPostData(options?: IJsonPostData)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.JsonPostData.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IJsonPostData">IJsonPostData</a></code> | - The configuration options for JSON scanning. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.JsonPostData.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

The configuration options for JSON scanning.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.JsonPostData.property.enabled">enabled</a></code> | <code>boolean</code> | If JSON scanning should be enabled. |
| <code><a href="#zap-cdk.JsonPostData.property.scanNullValues">scanNullValues</a></code> | <code>boolean</code> | If null values should be scanned. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.JsonPostData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If JSON scanning should be enabled.

Default: true

---

##### `scanNullValues`<sup>Optional</sup> <a name="scanNullValues" id="zap-cdk.JsonPostData.property.scanNullValues"></a>

```typescript
public readonly scanNullValues: boolean;
```

- *Type:* boolean

If null values should be scanned.

Default: false

---


### MonitorTest <a name="MonitorTest" id="zap-cdk.MonitorTest"></a>

- *Implements:* <a href="#zap-cdk.IMonitorTest">IMonitorTest</a>

Class representing a monitor test.

*Example*

```typescript
const monitorTest = new MonitorTest({
  name: 'test one',
  statistic: 'stats.addon.something',
  site: 'MySite',
  onFail: 'info'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.MonitorTest.Initializer"></a>

```typescript
import { MonitorTest } from 'zap-cdk'

new MonitorTest(options: IMonitorTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.MonitorTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IMonitorTest">IMonitorTest</a></code> | - The configuration options for the monitor test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.MonitorTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IMonitorTest">IMonitorTest</a>

The configuration options for the monitor test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.MonitorTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.MonitorTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.MonitorTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.MonitorTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.MonitorTest.property.site">site</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.MonitorTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.MonitorTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.MonitorTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.MonitorTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `site`<sup>Optional</sup> <a name="site" id="zap-cdk.MonitorTest.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---


### OpenAPI <a name="OpenAPI" id="zap-cdk.OpenAPI"></a>

- *Implements:* <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>

Class representing the OpenAPI import configuration.

*Example*

```typescript
const openApiConfig = new OpenAPI({
  apiFile: 'api-definition.yaml',
  context: 'MyContext',
  user: 'apiUser',
  targetUrl: 'https://api.example.com'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.OpenAPI.Initializer"></a>

```typescript
import { OpenAPI } from 'zap-cdk'

new OpenAPI(options: IOpenAPI)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.OpenAPI.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IOpenAPI">IOpenAPI</a></code> | - The options to initialize the OpenAPI configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.OpenAPI.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>

The options to initialize the OpenAPI configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.OpenAPI.property.apiFile">apiFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.OpenAPI.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.OpenAPI.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.OpenAPI.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.OpenAPI.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `apiFile`<sup>Optional</sup> <a name="apiFile" id="zap-cdk.OpenAPI.property.apiFile"></a>

```typescript
public readonly apiFile: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="zap-cdk.OpenAPI.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.OpenAPI.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="zap-cdk.OpenAPI.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.OpenAPI.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---


### PassiveScanConfig <a name="PassiveScanConfig" id="zap-cdk.PassiveScanConfig"></a>

- *Implements:* <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>

Class representing the passive scan configuration.

*Example*

```typescript
const passiveScanConfig = new PassiveScanConfig({
  parameters: {
    maxAlertsPerRule: 5,
    scanOnlyInScope: true,
    maxBodySizeInBytesToScan: 0,
    enableTags: false,
    disableAllRules: true
  },
  rules: [
    { id: 10010, name: 'Cross-Domain Misconfiguration', threshold: 'Medium' },
    { id: 10011, name: 'CSP Header Not Set', threshold: 'High' }
  ],
  enabled: true,
  alwaysRun: false
});
```


#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanConfig.Initializer"></a>

```typescript
import { PassiveScanConfig } from 'zap-cdk'

new PassiveScanConfig(options: IPassiveScanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a></code> | - The options to initialize the passive scan configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.PassiveScanConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>

The options to initialize the passive scan configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanConfig.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanConfig.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanConfig.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanConfig.property.rules">rules</a></code> | <code><a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.PassiveScanConfig.property.parameters"></a>

```typescript
public readonly parameters: IPassiveScanParameters;
```

- *Type:* <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.PassiveScanConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.PassiveScanConfig.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.PassiveScanConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `rules`<sup>Optional</sup> <a name="rules" id="zap-cdk.PassiveScanConfig.property.rules"></a>

```typescript
public readonly rules: IPassiveScanRule[];
```

- *Type:* <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>[]

---


### PassiveScanParameters <a name="PassiveScanParameters" id="zap-cdk.PassiveScanParameters"></a>

- *Implements:* <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>

Class representing the parameters for configuring a passive scan.

*Example*

```typescript
const passiveScanParams = new PassiveScanParameters({
  maxAlertsPerRule: 5,
  scanOnlyInScope: true,
  maxBodySizeInBytesToScan: 0,
  enableTags: false,
  disableAllRules: true
});
```


#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanParameters.Initializer"></a>

```typescript
import { PassiveScanParameters } from 'zap-cdk'

new PassiveScanParameters(options: IPassiveScanParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a></code> | - The options to initialize the passive scan parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.PassiveScanParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>

The options to initialize the passive scan parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanParameters.property.disableAllRules">disableAllRules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanParameters.property.enableTags">enableTags</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanParameters.property.maxAlertsPerRule">maxAlertsPerRule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanParameters.property.maxBodySizeInBytesToScan">maxBodySizeInBytesToScan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanParameters.property.scanOnlyInScope">scanOnlyInScope</a></code> | <code>boolean</code> | *No description.* |

---

##### `disableAllRules`<sup>Optional</sup> <a name="disableAllRules" id="zap-cdk.PassiveScanParameters.property.disableAllRules"></a>

```typescript
public readonly disableAllRules: boolean;
```

- *Type:* boolean

---

##### `enableTags`<sup>Optional</sup> <a name="enableTags" id="zap-cdk.PassiveScanParameters.property.enableTags"></a>

```typescript
public readonly enableTags: boolean;
```

- *Type:* boolean

---

##### `maxAlertsPerRule`<sup>Optional</sup> <a name="maxAlertsPerRule" id="zap-cdk.PassiveScanParameters.property.maxAlertsPerRule"></a>

```typescript
public readonly maxAlertsPerRule: number;
```

- *Type:* number

---

##### `maxBodySizeInBytesToScan`<sup>Optional</sup> <a name="maxBodySizeInBytesToScan" id="zap-cdk.PassiveScanParameters.property.maxBodySizeInBytesToScan"></a>

```typescript
public readonly maxBodySizeInBytesToScan: number;
```

- *Type:* number

---

##### `scanOnlyInScope`<sup>Optional</sup> <a name="scanOnlyInScope" id="zap-cdk.PassiveScanParameters.property.scanOnlyInScope"></a>

```typescript
public readonly scanOnlyInScope: boolean;
```

- *Type:* boolean

---


### PassiveScanRule <a name="PassiveScanRule" id="zap-cdk.PassiveScanRule"></a>

- *Implements:* <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>

Class representing a passive scan rule configuration.

*Example*

```typescript
const passiveScanRule = new PassiveScanRule({
  id: 10010,
  name: 'Cross-Domain Misconfiguration',
  threshold: 'Medium'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanRule.Initializer"></a>

```typescript
import { PassiveScanRule } from 'zap-cdk'

new PassiveScanRule(options: IPassiveScanRule)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanRule.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a></code> | - The options to initialize the passive scan rule. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.PassiveScanRule.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>

The options to initialize the passive scan rule.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanRule.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.PassiveScanRule.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.PassiveScanRule.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.PassiveScanRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.PassiveScanRule.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---


### PassiveScanWait <a name="PassiveScanWait" id="zap-cdk.PassiveScanWait"></a>

- *Implements:* <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a>

Class representing the configuration for waiting during a passive scan.

*Example*

```typescript
const passiveScanWaitConfig = new PassiveScanWait({
  maxDuration: 300
});
```


#### Initializers <a name="Initializers" id="zap-cdk.PassiveScanWait.Initializer"></a>

```typescript
import { PassiveScanWait } from 'zap-cdk'

new PassiveScanWait(maxDuration?: number)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanWait.Initializer.parameter.maxDuration">maxDuration</a></code> | <code>number</code> | - The max time to wait for the passive scanner, default: 0 (unlimited). |

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.PassiveScanWait.Initializer.parameter.maxDuration"></a>

- *Type:* number

The max time to wait for the passive scanner, default: 0 (unlimited).

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PassiveScanWait.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.PassiveScanWait.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---


### PolicyDefinition <a name="PolicyDefinition" id="zap-cdk.PolicyDefinition"></a>

- *Implements:* <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>

Class representing the policy definition for an active scan.

#### Initializers <a name="Initializers" id="zap-cdk.PolicyDefinition.Initializer"></a>

```typescript
import { PolicyDefinition } from 'zap-cdk'

new PolicyDefinition(options?: IPolicyDefinition)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PolicyDefinition.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a></code> | - The policy definition details. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.PolicyDefinition.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>

The policy definition details.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PolicyDefinition.property.alertTags">alertTags</a></code> | <code><a href="#zap-cdk.IAlertTags">IAlertTags</a></code> | *No description.* |
| <code><a href="#zap-cdk.PolicyDefinition.property.defaultStrength">defaultStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.PolicyDefinition.property.defaultThreshold">defaultThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.PolicyDefinition.property.rules">rules</a></code> | <code><a href="#zap-cdk.IRules">IRules</a>[]</code> | *No description.* |

---

##### `alertTags`<sup>Optional</sup> <a name="alertTags" id="zap-cdk.PolicyDefinition.property.alertTags"></a>

```typescript
public readonly alertTags: IAlertTags;
```

- *Type:* <a href="#zap-cdk.IAlertTags">IAlertTags</a>

---

##### `defaultStrength`<sup>Optional</sup> <a name="defaultStrength" id="zap-cdk.PolicyDefinition.property.defaultStrength"></a>

```typescript
public readonly defaultStrength: string;
```

- *Type:* string

---

##### `defaultThreshold`<sup>Optional</sup> <a name="defaultThreshold" id="zap-cdk.PolicyDefinition.property.defaultThreshold"></a>

```typescript
public readonly defaultThreshold: string;
```

- *Type:* string

---

##### `rules`<sup>Optional</sup> <a name="rules" id="zap-cdk.PolicyDefinition.property.rules"></a>

```typescript
public readonly rules: IRules[];
```

- *Type:* <a href="#zap-cdk.IRules">IRules</a>[]

---


### PollAdditionalHeaders <a name="PollAdditionalHeaders" id="zap-cdk.PollAdditionalHeaders"></a>

- *Implements:* <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>

Represents additional headers for poll request in authentication verification.

#### Initializers <a name="Initializers" id="zap-cdk.PollAdditionalHeaders.Initializer"></a>

```typescript
import { PollAdditionalHeaders } from 'zap-cdk'

new PollAdditionalHeaders(options: IPollAdditionalHeaders)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PollAdditionalHeaders.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a></code> | - The options to initialize the headers. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.PollAdditionalHeaders.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>

The options to initialize the headers.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PollAdditionalHeaders.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.PollAdditionalHeaders.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `header`<sup>Required</sup> <a name="header" id="zap-cdk.PollAdditionalHeaders.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.PollAdditionalHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---


### PostData <a name="PostData" id="zap-cdk.PostData"></a>

- *Implements:* <a href="#zap-cdk.IPostData">IPostData</a>

Class representing the configuration for POST data scanning.

*Example*

```typescript
const postDataConfig = new PostData({ enabled: true, multiPartFormData: true, xml: true, json: new JsonPostData(), googleWebToolkit: false, directWebRemoting: false });
console.log(postDataConfig.enabled); // true
```


#### Initializers <a name="Initializers" id="zap-cdk.PostData.Initializer"></a>

```typescript
import { PostData } from 'zap-cdk'

new PostData(options?: IPostData)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PostData.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPostData">IPostData</a></code> | - The configuration options for POST data scanning. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.PostData.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPostData">IPostData</a>

The configuration options for POST data scanning.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.PostData.property.json">json</a></code> | <code><a href="#zap-cdk.IJsonPostData">IJsonPostData</a></code> | Configuration for JSON bodies. |
| <code><a href="#zap-cdk.PostData.property.directWebRemoting">directWebRemoting</a></code> | <code>boolean</code> | If DWR scanning should be enabled. |
| <code><a href="#zap-cdk.PostData.property.enabled">enabled</a></code> | <code>boolean</code> | If POST data scanning is enabled. |
| <code><a href="#zap-cdk.PostData.property.googleWebToolkit">googleWebToolkit</a></code> | <code>boolean</code> | If GWT scanning should be enabled. |
| <code><a href="#zap-cdk.PostData.property.multiPartFormData">multiPartFormData</a></code> | <code>boolean</code> | If multipart form data bodies should be scanned. |
| <code><a href="#zap-cdk.PostData.property.xml">xml</a></code> | <code>boolean</code> | If XML bodies should be scanned. |

---

##### `json`<sup>Required</sup> <a name="json" id="zap-cdk.PostData.property.json"></a>

```typescript
public readonly json: IJsonPostData;
```

- *Type:* <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

Configuration for JSON bodies.

---

##### `directWebRemoting`<sup>Optional</sup> <a name="directWebRemoting" id="zap-cdk.PostData.property.directWebRemoting"></a>

```typescript
public readonly directWebRemoting: boolean;
```

- *Type:* boolean

If DWR scanning should be enabled.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.PostData.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If POST data scanning is enabled.

Default: true

---

##### `googleWebToolkit`<sup>Optional</sup> <a name="googleWebToolkit" id="zap-cdk.PostData.property.googleWebToolkit"></a>

```typescript
public readonly googleWebToolkit: boolean;
```

- *Type:* boolean

If GWT scanning should be enabled.

Default: false

---

##### `multiPartFormData`<sup>Optional</sup> <a name="multiPartFormData" id="zap-cdk.PostData.property.multiPartFormData"></a>

```typescript
public readonly multiPartFormData: boolean;
```

- *Type:* boolean

If multipart form data bodies should be scanned.

Default: true

---

##### `xml`<sup>Optional</sup> <a name="xml" id="zap-cdk.PostData.property.xml"></a>

```typescript
public readonly xml: boolean;
```

- *Type:* boolean

If XML bodies should be scanned.

Default: true

---


### Postman <a name="Postman" id="zap-cdk.Postman"></a>

- *Implements:* <a href="#zap-cdk.IPostman">IPostman</a>

Class representing the Postman import configuration.

*Example*

```typescript
const postmanConfig = new Postman({
  collectionFile: 'postman-collection.json',
  variables: 'baseUrl=https://api.example.com,apiKey=12345'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Postman.Initializer"></a>

```typescript
import { Postman } from 'zap-cdk'

new Postman(options: IPostman)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Postman.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IPostman">IPostman</a></code> | - The options to initialize the Postman configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Postman.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IPostman">IPostman</a>

The options to initialize the Postman configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Postman.property.collectionFile">collectionFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Postman.property.collectionUrl">collectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Postman.property.variables">variables</a></code> | <code>string</code> | *No description.* |

---

##### `collectionFile`<sup>Optional</sup> <a name="collectionFile" id="zap-cdk.Postman.property.collectionFile"></a>

```typescript
public readonly collectionFile: string;
```

- *Type:* string

---

##### `collectionUrl`<sup>Optional</sup> <a name="collectionUrl" id="zap-cdk.Postman.property.collectionUrl"></a>

```typescript
public readonly collectionUrl: string;
```

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="zap-cdk.Postman.property.variables"></a>

```typescript
public readonly variables: string;
```

- *Type:* string

---


### Replacer <a name="Replacer" id="zap-cdk.Replacer"></a>

- *Implements:* <a href="#zap-cdk.IReplacer">IReplacer</a>

Class representing the configuration for string replacement rules.

*Example*

```typescript
const replacerConfig = new Replacer({
  deleteAllRules: true,
  rules: [
    new ReplacerRule({
      description: 'Replace API Key',
      url: '.*example.*',
      matchType: 'req_header_str',
      matchString: 'API-Key: .*',
      matchRegex: true,
      replacementString: 'API-Key: 12345',
      tokenProcessing: false,
      initiators: [1, 2, 3]
    })
  ]
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Replacer.Initializer"></a>

```typescript
import { Replacer } from 'zap-cdk'

new Replacer(options: IReplacer)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Replacer.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IReplacer">IReplacer</a></code> | - The options to initialize the replacer configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Replacer.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IReplacer">IReplacer</a>

The options to initialize the replacer configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Replacer.property.rules">rules</a></code> | <code><a href="#zap-cdk.IReplacerRule">IReplacerRule</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.Replacer.property.deleteAllRules">deleteAllRules</a></code> | <code>boolean</code> | *No description.* |

---

##### `rules`<sup>Required</sup> <a name="rules" id="zap-cdk.Replacer.property.rules"></a>

```typescript
public readonly rules: IReplacerRule[];
```

- *Type:* <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>[]

---

##### `deleteAllRules`<sup>Optional</sup> <a name="deleteAllRules" id="zap-cdk.Replacer.property.deleteAllRules"></a>

```typescript
public readonly deleteAllRules: boolean;
```

- *Type:* boolean

---


### ReplacerRule <a name="ReplacerRule" id="zap-cdk.ReplacerRule"></a>

- *Implements:* <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>

Class representing a rule for replacing strings in requests or responses.

*Example*

```typescript
const replacerRule = new ReplacerRule({
  description: 'Replace API Key',
  url: '.*example.*',
  matchType: 'req_header_str',
  matchString: 'API-Key: .*',
  matchRegex: true,
  replacementString: 'API-Key: 12345',
  tokenProcessing: false,
  initiators: [1, 2, 3]
});
```


#### Initializers <a name="Initializers" id="zap-cdk.ReplacerRule.Initializer"></a>

```typescript
import { ReplacerRule } from 'zap-cdk'

new ReplacerRule(options: IReplacerRule)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReplacerRule.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IReplacerRule">IReplacerRule</a></code> | - The configuration options for the replacer rule. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.ReplacerRule.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>

The configuration options for the replacer rule.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.ReplacerRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.matchString">matchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.replacementString">replacementString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.initiators">initiators</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.matchRegex">matchRegex</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.tokenProcessing">tokenProcessing</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.ReplacerRule.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="zap-cdk.ReplacerRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `matchString`<sup>Required</sup> <a name="matchString" id="zap-cdk.ReplacerRule.property.matchString"></a>

```typescript
public readonly matchString: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="zap-cdk.ReplacerRule.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `replacementString`<sup>Required</sup> <a name="replacementString" id="zap-cdk.ReplacerRule.property.replacementString"></a>

```typescript
public readonly replacementString: string;
```

- *Type:* string

---

##### `initiators`<sup>Optional</sup> <a name="initiators" id="zap-cdk.ReplacerRule.property.initiators"></a>

```typescript
public readonly initiators: number[];
```

- *Type:* number[]

---

##### `matchRegex`<sup>Optional</sup> <a name="matchRegex" id="zap-cdk.ReplacerRule.property.matchRegex"></a>

```typescript
public readonly matchRegex: boolean;
```

- *Type:* boolean

---

##### `tokenProcessing`<sup>Optional</sup> <a name="tokenProcessing" id="zap-cdk.ReplacerRule.property.tokenProcessing"></a>

```typescript
public readonly tokenProcessing: boolean;
```

- *Type:* boolean

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.ReplacerRule.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---


### Report <a name="Report" id="zap-cdk.Report"></a>

- *Implements:* <a href="#zap-cdk.IReport">IReport</a>

Class representing a report configuration.

*Example*

```typescript
const reportConfig = new Report({
  template: 'traditional-html',
  theme: 'corporate',
  reportDir: '/reports',
  reportFile: '{{yyyy-MM-dd}}-ZAP-Report-[[site]]',
  reportTitle: 'Weekly Security Report',
  reportDescription: 'This is the weekly security report generated by ZAP.',
  displayReport: true,
  risks: ['high', 'medium'],
  confidences: ['high', 'medium', 'low'],
  sections: ['alertSummary', 'siteSummary', 'alertsByRisk'],
  sites: ['https://example.com', 'https://another-example.com']
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Report.Initializer"></a>

```typescript
import { Report } from 'zap-cdk'

new Report(options: IReport)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Report.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IReport">IReport</a></code> | - The options to initialize the report configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Report.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IReport">IReport</a>

The options to initialize the report configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Report.property.confidences">confidences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.displayReport">displayReport</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.reportDescription">reportDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.reportDir">reportDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.reportFile">reportFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.reportTitle">reportTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.risks">risks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.sections">sections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.sites">sites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Report.property.theme">theme</a></code> | <code>string</code> | *No description.* |

---

##### `confidences`<sup>Optional</sup> <a name="confidences" id="zap-cdk.Report.property.confidences"></a>

```typescript
public readonly confidences: string[];
```

- *Type:* string[]

---

##### `displayReport`<sup>Optional</sup> <a name="displayReport" id="zap-cdk.Report.property.displayReport"></a>

```typescript
public readonly displayReport: boolean;
```

- *Type:* boolean

---

##### `reportDescription`<sup>Optional</sup> <a name="reportDescription" id="zap-cdk.Report.property.reportDescription"></a>

```typescript
public readonly reportDescription: string;
```

- *Type:* string

---

##### `reportDir`<sup>Optional</sup> <a name="reportDir" id="zap-cdk.Report.property.reportDir"></a>

```typescript
public readonly reportDir: string;
```

- *Type:* string

---

##### `reportFile`<sup>Optional</sup> <a name="reportFile" id="zap-cdk.Report.property.reportFile"></a>

```typescript
public readonly reportFile: string;
```

- *Type:* string

---

##### `reportTitle`<sup>Optional</sup> <a name="reportTitle" id="zap-cdk.Report.property.reportTitle"></a>

```typescript
public readonly reportTitle: string;
```

- *Type:* string

---

##### `risks`<sup>Optional</sup> <a name="risks" id="zap-cdk.Report.property.risks"></a>

```typescript
public readonly risks: string[];
```

- *Type:* string[]

---

##### `sections`<sup>Optional</sup> <a name="sections" id="zap-cdk.Report.property.sections"></a>

```typescript
public readonly sections: string[];
```

- *Type:* string[]

---

##### `sites`<sup>Optional</sup> <a name="sites" id="zap-cdk.Report.property.sites"></a>

```typescript
public readonly sites: string[];
```

- *Type:* string[]

---

##### `template`<sup>Optional</sup> <a name="template" id="zap-cdk.Report.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `theme`<sup>Optional</sup> <a name="theme" id="zap-cdk.Report.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---


### Request <a name="Request" id="zap-cdk.Request"></a>

- *Implements:* <a href="#zap-cdk.IRequest">IRequest</a>

#### Initializers <a name="Initializers" id="zap-cdk.Request.Initializer"></a>

```typescript
import { Request } from 'zap-cdk'

new Request(options: IRequest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Request.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IRequest">IRequest</a></code> | - The configuration options for the request. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Request.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IRequest">IRequest</a>

The configuration options for the request.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Request.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.headers">headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.httpVersion">httpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Request.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |

---

##### `url`<sup>Required</sup> <a name="url" id="zap-cdk.Request.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `data`<sup>Optional</sup> <a name="data" id="zap-cdk.Request.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="zap-cdk.Request.property.headers"></a>

```typescript
public readonly headers: string[];
```

- *Type:* string[]

---

##### `httpVersion`<sup>Optional</sup> <a name="httpVersion" id="zap-cdk.Request.property.httpVersion"></a>

```typescript
public readonly httpVersion: string;
```

- *Type:* string

---

##### `method`<sup>Optional</sup> <a name="method" id="zap-cdk.Request.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.Request.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="zap-cdk.Request.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---


### RequestorParameters <a name="RequestorParameters" id="zap-cdk.RequestorParameters"></a>

- *Implements:* <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

#### Initializers <a name="Initializers" id="zap-cdk.RequestorParameters.Initializer"></a>

```typescript
import { RequestorParameters } from 'zap-cdk'

new RequestorParameters(options: IRequestorParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.RequestorParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a></code> | - The configuration options for the requestor parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.RequestorParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

The configuration options for the requestor parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.RequestorParameters.property.requests">requests</a></code> | <code><a href="#zap-cdk.IRequest">IRequest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.RequestorParameters.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.RequestorParameters.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.RequestorParameters.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `requests`<sup>Required</sup> <a name="requests" id="zap-cdk.RequestorParameters.property.requests"></a>

```typescript
public readonly requests: IRequest[];
```

- *Type:* <a href="#zap-cdk.IRequest">IRequest</a>[]

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.RequestorParameters.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.RequestorParameters.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.RequestorParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---


### Rule <a name="Rule" id="zap-cdk.Rule"></a>

- *Implements:* <a href="#zap-cdk.IRule">IRule</a>

Class representing an individual rule in the active scan policy.

#### Initializers <a name="Initializers" id="zap-cdk.Rule.Initializer"></a>

```typescript
import { Rule } from 'zap-cdk'

new Rule(options: IRule)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Rule.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IRule">IRule</a></code> | - The configuration options for the rule. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Rule.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IRule">IRule</a>

The configuration options for the rule.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Rule.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.Rule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Rule.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Rule.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.Rule.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.Rule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.Rule.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.Rule.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---


### Rules <a name="Rules" id="zap-cdk.Rules"></a>

- *Implements:* <a href="#zap-cdk.IRules">IRules</a>

Class representing a rule for the active scan.

#### Initializers <a name="Initializers" id="zap-cdk.Rules.Initializer"></a>

```typescript
import { Rules } from 'zap-cdk'

new Rules(options: IRules)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Rules.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IRules">IRules</a></code> | - The rule details. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Rules.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IRules">IRules</a>

The rule details.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Rules.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.Rules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Rules.property.strength">strength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Rules.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="zap-cdk.Rules.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.Rules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `strength`<sup>Optional</sup> <a name="strength" id="zap-cdk.Rules.property.strength"></a>

```typescript
public readonly strength: string;
```

- *Type:* string

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="zap-cdk.Rules.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---


### SessionManagementParameters <a name="SessionManagementParameters" id="zap-cdk.SessionManagementParameters"></a>

- *Implements:* <a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a>

Represents the parameters for session management in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.SessionManagementParameters.Initializer"></a>

```typescript
import { SessionManagementParameters } from 'zap-cdk'

new SessionManagementParameters(options: ISessionManagementParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SessionManagementParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.SessionManagementParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SessionManagementParameters.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SessionManagementParameters.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a></code> | *No description.* |

---

##### `method`<sup>Required</sup> <a name="method" id="zap-cdk.SessionManagementParameters.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.SessionManagementParameters.property.parameters"></a>

```typescript
public readonly parameters: ISessionManagementParametersParameters;
```

- *Type:* <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>

---


### SessionManagementParametersParameters <a name="SessionManagementParametersParameters" id="zap-cdk.SessionManagementParametersParameters"></a>

- *Implements:* <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>

Represents the parameters for session management in the scanning process.

#### Initializers <a name="Initializers" id="zap-cdk.SessionManagementParametersParameters.Initializer"></a>

```typescript
import { SessionManagementParametersParameters } from 'zap-cdk'

new SessionManagementParametersParameters(options?: ISessionManagementParametersParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SessionManagementParametersParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a></code> | - The options to initialize the session management parameters. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.SessionManagementParametersParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>

The options to initialize the session management parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SessionManagementParametersParameters.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SessionManagementParametersParameters.property.scriptEngine">scriptEngine</a></code> | <code>string</code> | *No description.* |

---

##### `script`<sup>Optional</sup> <a name="script" id="zap-cdk.SessionManagementParametersParameters.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `scriptEngine`<sup>Optional</sup> <a name="scriptEngine" id="zap-cdk.SessionManagementParametersParameters.property.scriptEngine"></a>

```typescript
public readonly scriptEngine: string;
```

- *Type:* string

---


### Soap <a name="Soap" id="zap-cdk.Soap"></a>

- *Implements:* <a href="#zap-cdk.ISoap">ISoap</a>

Class representing the SOAP service configuration.

*Example*

```typescript
const soapConfig = new Soap({
  wsdlFile: 'service.wsdl',
  wsdlUrl: 'https://example.com/service?wsdl'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Soap.Initializer"></a>

```typescript
import { Soap } from 'zap-cdk'

new Soap(options: ISoap)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Soap.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISoap">ISoap</a></code> | - The options to initialize the SOAP configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Soap.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISoap">ISoap</a>

The options to initialize the SOAP configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Soap.property.wsdlFile">wsdlFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Soap.property.wsdlUrl">wsdlUrl</a></code> | <code>string</code> | *No description.* |

---

##### `wsdlFile`<sup>Optional</sup> <a name="wsdlFile" id="zap-cdk.Soap.property.wsdlFile"></a>

```typescript
public readonly wsdlFile: string;
```

- *Type:* string

---

##### `wsdlUrl`<sup>Optional</sup> <a name="wsdlUrl" id="zap-cdk.Soap.property.wsdlUrl"></a>

```typescript
public readonly wsdlUrl: string;
```

- *Type:* string

---


### Spider <a name="Spider" id="zap-cdk.Spider"></a>

- *Implements:* <a href="#zap-cdk.ISpider">ISpider</a>

Class representing a spider configuration.

*Example*

```typescript
const spiderParams = new SpiderParameters({
  context: 'MyContext',
  maxDuration: 10,
  parseComments: false
});
const spiderTest = new SpiderTest({
  statistic: 'urls',
  operator: '>=',
  value: 10,
  onFail: 'error'
});
const spider = new Spider(spiderParams, [spiderTest], true, false);
```


#### Initializers <a name="Initializers" id="zap-cdk.Spider.Initializer"></a>

```typescript
import { Spider } from 'zap-cdk'

new Spider(parameters: ISpiderParameters, tests?: ISpiderTest[], enabled?: boolean, alwaysRun?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Spider.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a></code> | - The parameters for the spider configuration. |
| <code><a href="#zap-cdk.Spider.Initializer.parameter.tests">tests</a></code> | <code><a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]</code> | - List of tests to perform. |
| <code><a href="#zap-cdk.Spider.Initializer.parameter.enabled">enabled</a></code> | <code>boolean</code> | - If set to false the job will not be run, default: true. |
| <code><a href="#zap-cdk.Spider.Initializer.parameter.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | - If set and the job is enabled then it will run even if the plan exits early, default: false. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.Spider.Initializer.parameter.parameters"></a>

- *Type:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

The parameters for the spider configuration.

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.Spider.Initializer.parameter.tests"></a>

- *Type:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]

List of tests to perform.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.Spider.Initializer.parameter.enabled"></a>

- *Type:* boolean

If set to false the job will not be run, default: true.

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.Spider.Initializer.parameter.alwaysRun"></a>

- *Type:* boolean

If set and the job is enabled then it will run even if the plan exits early, default: false.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Spider.property.parameters">parameters</a></code> | <code><a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a></code> | *No description.* |
| <code><a href="#zap-cdk.Spider.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.Spider.property.alwaysRun">alwaysRun</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.Spider.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.Spider.property.tests">tests</a></code> | <code><a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]</code> | *No description.* |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="zap-cdk.Spider.property.parameters"></a>

```typescript
public readonly parameters: ISpiderParameters;
```

- *Type:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.Spider.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `alwaysRun`<sup>Optional</sup> <a name="alwaysRun" id="zap-cdk.Spider.property.alwaysRun"></a>

```typescript
public readonly alwaysRun: boolean;
```

- *Type:* boolean

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.Spider.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.Spider.property.tests"></a>

```typescript
public readonly tests: ISpiderTest[];
```

- *Type:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>[]

---


### SpiderAjax <a name="SpiderAjax" id="zap-cdk.SpiderAjax"></a>

- *Implements:* <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

Class representing the configuration for an AJAX spider.

*Example*

```typescript
const spiderAjax = new SpiderAjax({
  context: 'MyContext',
  url: 'https://example.com',
  maxDuration: 10,
  inScopeOnly: true,
  elements: ['a', 'button'],
  excludedElements: [
    new ExcludedElement({
      description: 'Exclude login button',
      element: 'button',
      text: 'Login'
    })
  ],
  tests: [
    new AjaxTest({
      name: 'Check AJAX requests',
      type: 'stats',
      statistic: 'ajax.requests',
      operator: '>',
      value: 10,
      onFail: 'warn'
    })
  ]
});
```


#### Initializers <a name="Initializers" id="zap-cdk.SpiderAjax.Initializer"></a>

```typescript
import { SpiderAjax } from 'zap-cdk'

new SpiderAjax(options: ISpiderAjax)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderAjax.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a></code> | - The options to initialize the AJAX spider configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.SpiderAjax.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

The options to initialize the AJAX spider configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderAjax.property.browserId">browserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.clickDefaultElems">clickDefaultElems</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.clickElemsOnce">clickElemsOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.elements">elements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.eventWait">eventWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.excludedElements">excludedElements</a></code> | <code><a href="#zap-cdk.IExcludedElement">IExcludedElement</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.inScopeOnly">inScopeOnly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.maxCrawlDepth">maxCrawlDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.maxCrawlStates">maxCrawlStates</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.numberOfBrowsers">numberOfBrowsers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.randomInputs">randomInputs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.reloadWait">reloadWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.runOnlyIfModern">runOnlyIfModern</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.scopeCheck">scopeCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.tests">tests</a></code> | <code><a href="#zap-cdk.IAjaxTest">IAjaxTest</a>[]</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderAjax.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `browserId`<sup>Optional</sup> <a name="browserId" id="zap-cdk.SpiderAjax.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

---

##### `clickDefaultElems`<sup>Optional</sup> <a name="clickDefaultElems" id="zap-cdk.SpiderAjax.property.clickDefaultElems"></a>

```typescript
public readonly clickDefaultElems: boolean;
```

- *Type:* boolean

---

##### `clickElemsOnce`<sup>Optional</sup> <a name="clickElemsOnce" id="zap-cdk.SpiderAjax.property.clickElemsOnce"></a>

```typescript
public readonly clickElemsOnce: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.SpiderAjax.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `elements`<sup>Optional</sup> <a name="elements" id="zap-cdk.SpiderAjax.property.elements"></a>

```typescript
public readonly elements: string[];
```

- *Type:* string[]

---

##### `eventWait`<sup>Optional</sup> <a name="eventWait" id="zap-cdk.SpiderAjax.property.eventWait"></a>

```typescript
public readonly eventWait: number;
```

- *Type:* number

---

##### `excludedElements`<sup>Optional</sup> <a name="excludedElements" id="zap-cdk.SpiderAjax.property.excludedElements"></a>

```typescript
public readonly excludedElements: IExcludedElement[];
```

- *Type:* <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>[]

---

##### `inScopeOnly`<sup>Optional</sup> <a name="inScopeOnly" id="zap-cdk.SpiderAjax.property.inScopeOnly"></a>

```typescript
public readonly inScopeOnly: boolean;
```

- *Type:* boolean

---

##### `maxCrawlDepth`<sup>Optional</sup> <a name="maxCrawlDepth" id="zap-cdk.SpiderAjax.property.maxCrawlDepth"></a>

```typescript
public readonly maxCrawlDepth: number;
```

- *Type:* number

---

##### `maxCrawlStates`<sup>Optional</sup> <a name="maxCrawlStates" id="zap-cdk.SpiderAjax.property.maxCrawlStates"></a>

```typescript
public readonly maxCrawlStates: number;
```

- *Type:* number

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.SpiderAjax.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---

##### `numberOfBrowsers`<sup>Optional</sup> <a name="numberOfBrowsers" id="zap-cdk.SpiderAjax.property.numberOfBrowsers"></a>

```typescript
public readonly numberOfBrowsers: number;
```

- *Type:* number

---

##### `randomInputs`<sup>Optional</sup> <a name="randomInputs" id="zap-cdk.SpiderAjax.property.randomInputs"></a>

```typescript
public readonly randomInputs: boolean;
```

- *Type:* boolean

---

##### `reloadWait`<sup>Optional</sup> <a name="reloadWait" id="zap-cdk.SpiderAjax.property.reloadWait"></a>

```typescript
public readonly reloadWait: number;
```

- *Type:* number

---

##### `runOnlyIfModern`<sup>Optional</sup> <a name="runOnlyIfModern" id="zap-cdk.SpiderAjax.property.runOnlyIfModern"></a>

```typescript
public readonly runOnlyIfModern: boolean;
```

- *Type:* boolean

---

##### `scopeCheck`<sup>Optional</sup> <a name="scopeCheck" id="zap-cdk.SpiderAjax.property.scopeCheck"></a>

```typescript
public readonly scopeCheck: string;
```

- *Type:* string

---

##### `tests`<sup>Optional</sup> <a name="tests" id="zap-cdk.SpiderAjax.property.tests"></a>

```typescript
public readonly tests: IAjaxTest[];
```

- *Type:* <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>[]

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.SpiderAjax.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.SpiderAjax.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---


### SpiderParameters <a name="SpiderParameters" id="zap-cdk.SpiderParameters"></a>

- *Implements:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

#### Initializers <a name="Initializers" id="zap-cdk.SpiderParameters.Initializer"></a>

```typescript
import { SpiderParameters } from 'zap-cdk'

new SpiderParameters(options: ISpiderParameters)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderParameters.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a></code> | - The options to initialize the spider parameters. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.SpiderParameters.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

The options to initialize the spider parameters.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderParameters.property.acceptCookies">acceptCookies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.handleODataParametersVisited">handleODataParametersVisited</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.handleParameters">handleParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.logoutAvoidance">logoutAvoidance</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.maxChildren">maxChildren</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.maxDepth">maxDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.maxDuration">maxDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.maxParseSizeBytes">maxParseSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseComments">parseComments</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseDsStore">parseDsStore</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseGit">parseGit</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseRobotsTxt">parseRobotsTxt</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseSitemapXml">parseSitemapXml</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.parseSVNEntries">parseSVNEntries</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.postForm">postForm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.processForm">processForm</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.sendRefererHeader">sendRefererHeader</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.threadCount">threadCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderParameters.property.userAgent">userAgent</a></code> | <code>string</code> | *No description.* |

---

##### `acceptCookies`<sup>Optional</sup> <a name="acceptCookies" id="zap-cdk.SpiderParameters.property.acceptCookies"></a>

```typescript
public readonly acceptCookies: boolean;
```

- *Type:* boolean

---

##### `context`<sup>Optional</sup> <a name="context" id="zap-cdk.SpiderParameters.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `handleODataParametersVisited`<sup>Optional</sup> <a name="handleODataParametersVisited" id="zap-cdk.SpiderParameters.property.handleODataParametersVisited"></a>

```typescript
public readonly handleODataParametersVisited: boolean;
```

- *Type:* boolean

---

##### `handleParameters`<sup>Optional</sup> <a name="handleParameters" id="zap-cdk.SpiderParameters.property.handleParameters"></a>

```typescript
public readonly handleParameters: string;
```

- *Type:* string

---

##### `logoutAvoidance`<sup>Optional</sup> <a name="logoutAvoidance" id="zap-cdk.SpiderParameters.property.logoutAvoidance"></a>

```typescript
public readonly logoutAvoidance: boolean;
```

- *Type:* boolean

---

##### `maxChildren`<sup>Optional</sup> <a name="maxChildren" id="zap-cdk.SpiderParameters.property.maxChildren"></a>

```typescript
public readonly maxChildren: number;
```

- *Type:* number

---

##### `maxDepth`<sup>Optional</sup> <a name="maxDepth" id="zap-cdk.SpiderParameters.property.maxDepth"></a>

```typescript
public readonly maxDepth: number;
```

- *Type:* number

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="zap-cdk.SpiderParameters.property.maxDuration"></a>

```typescript
public readonly maxDuration: number;
```

- *Type:* number

---

##### `maxParseSizeBytes`<sup>Optional</sup> <a name="maxParseSizeBytes" id="zap-cdk.SpiderParameters.property.maxParseSizeBytes"></a>

```typescript
public readonly maxParseSizeBytes: number;
```

- *Type:* number

---

##### `parseComments`<sup>Optional</sup> <a name="parseComments" id="zap-cdk.SpiderParameters.property.parseComments"></a>

```typescript
public readonly parseComments: boolean;
```

- *Type:* boolean

---

##### `parseDsStore`<sup>Optional</sup> <a name="parseDsStore" id="zap-cdk.SpiderParameters.property.parseDsStore"></a>

```typescript
public readonly parseDsStore: boolean;
```

- *Type:* boolean

---

##### `parseGit`<sup>Optional</sup> <a name="parseGit" id="zap-cdk.SpiderParameters.property.parseGit"></a>

```typescript
public readonly parseGit: boolean;
```

- *Type:* boolean

---

##### `parseRobotsTxt`<sup>Optional</sup> <a name="parseRobotsTxt" id="zap-cdk.SpiderParameters.property.parseRobotsTxt"></a>

```typescript
public readonly parseRobotsTxt: boolean;
```

- *Type:* boolean

---

##### `parseSitemapXml`<sup>Optional</sup> <a name="parseSitemapXml" id="zap-cdk.SpiderParameters.property.parseSitemapXml"></a>

```typescript
public readonly parseSitemapXml: boolean;
```

- *Type:* boolean

---

##### `parseSVNEntries`<sup>Optional</sup> <a name="parseSVNEntries" id="zap-cdk.SpiderParameters.property.parseSVNEntries"></a>

```typescript
public readonly parseSVNEntries: boolean;
```

- *Type:* boolean

---

##### `postForm`<sup>Optional</sup> <a name="postForm" id="zap-cdk.SpiderParameters.property.postForm"></a>

```typescript
public readonly postForm: boolean;
```

- *Type:* boolean

---

##### `processForm`<sup>Optional</sup> <a name="processForm" id="zap-cdk.SpiderParameters.property.processForm"></a>

```typescript
public readonly processForm: boolean;
```

- *Type:* boolean

---

##### `sendRefererHeader`<sup>Optional</sup> <a name="sendRefererHeader" id="zap-cdk.SpiderParameters.property.sendRefererHeader"></a>

```typescript
public readonly sendRefererHeader: boolean;
```

- *Type:* boolean

---

##### `threadCount`<sup>Optional</sup> <a name="threadCount" id="zap-cdk.SpiderParameters.property.threadCount"></a>

```typescript
public readonly threadCount: number;
```

- *Type:* number

---

##### `url`<sup>Optional</sup> <a name="url" id="zap-cdk.SpiderParameters.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="zap-cdk.SpiderParameters.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="zap-cdk.SpiderParameters.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

---


### SpiderTest <a name="SpiderTest" id="zap-cdk.SpiderTest"></a>

- *Implements:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>

Class representing a test configuration for the spider.

*Example*

```typescript
const spiderTest = new SpiderTest({
  statistic: 'urls',
  operator: '>=',
  value: 10,
  onFail: 'error'
});
```


#### Initializers <a name="Initializers" id="zap-cdk.SpiderTest.Initializer"></a>

```typescript
import { SpiderTest } from 'zap-cdk'

new SpiderTest(options: ISpiderTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ISpiderTest">ISpiderTest</a></code> | - The options to initialize the spider test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.SpiderTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>

The options to initialize the spider test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.SpiderTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.SpiderTest.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.SpiderTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.SpiderTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.SpiderTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.SpiderTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.SpiderTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.SpiderTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### StatisticsTest <a name="StatisticsTest" id="zap-cdk.StatisticsTest"></a>

- *Implements:* <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a>

#### Initializers <a name="Initializers" id="zap-cdk.StatisticsTest.Initializer"></a>

```typescript
import { StatisticsTest } from 'zap-cdk'

new StatisticsTest(options: IStatisticsTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.StatisticsTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a></code> | - The configuration options for the statistics test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.StatisticsTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a>

The configuration options for the statistics test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.StatisticsTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.StatisticsTest.property.site">site</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.StatisticsTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.StatisticsTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="zap-cdk.StatisticsTest.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.StatisticsTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="zap-cdk.StatisticsTest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.StatisticsTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `site`<sup>Optional</sup> <a name="site" id="zap-cdk.StatisticsTest.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---


### Technology <a name="Technology" id="zap-cdk.Technology"></a>

- *Implements:* <a href="#zap-cdk.ITechnology">ITechnology</a>

Represents the technology details for the scanning context.

#### Initializers <a name="Initializers" id="zap-cdk.Technology.Initializer"></a>

```typescript
import { Technology } from 'zap-cdk'

new Technology(options: ITechnology)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Technology.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ITechnology">ITechnology</a></code> | - The options to initialize the technology details. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Technology.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ITechnology">ITechnology</a>

The options to initialize the technology details.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Technology.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#zap-cdk.Technology.property.include">include</a></code> | <code>string[]</code> | *No description.* |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="zap-cdk.Technology.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Optional</sup> <a name="include" id="zap-cdk.Technology.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---


### TotpConfig <a name="TotpConfig" id="zap-cdk.TotpConfig"></a>

- *Implements:* <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>

Represents the TOTP (Time-based One-Time Password) configuration for a user.

#### Initializers <a name="Initializers" id="zap-cdk.TotpConfig.Initializer"></a>

```typescript
import { TotpConfig } from 'zap-cdk'

new TotpConfig(options: ITotpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.TotpConfig.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.ITotpConfig">ITotpConfig</a></code> | - The options to initialize the TOTP configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.TotpConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>

The options to initialize the TOTP configuration.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.TotpConfig.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.TotpConfig.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.TotpConfig.property.digits">digits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#zap-cdk.TotpConfig.property.period">period</a></code> | <code>number</code> | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="secret" id="zap-cdk.TotpConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="zap-cdk.TotpConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `digits`<sup>Optional</sup> <a name="digits" id="zap-cdk.TotpConfig.property.digits"></a>

```typescript
public readonly digits: number;
```

- *Type:* number

---

##### `period`<sup>Optional</sup> <a name="period" id="zap-cdk.TotpConfig.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---


### UrlQueryStringAndDataDrivenNodes <a name="UrlQueryStringAndDataDrivenNodes" id="zap-cdk.UrlQueryStringAndDataDrivenNodes"></a>

- *Implements:* <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

Class representing the configuration options for scanning URL query strings and Data Driven Nodes (DDNs).

*Example*

```typescript
const config = new UrlQueryStringAndDataDrivenNodes({ enabled: true, addParam: false, odata: true });
console.log(config.enabled); // true
```


#### Initializers <a name="Initializers" id="zap-cdk.UrlQueryStringAndDataDrivenNodes.Initializer"></a>

```typescript
import { UrlQueryStringAndDataDrivenNodes } from 'zap-cdk'

new UrlQueryStringAndDataDrivenNodes(options?: IUrlQueryStringAndDataDrivenNodes)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UrlQueryStringAndDataDrivenNodes.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a></code> | - The configuration options. |

---

##### `options`<sup>Optional</sup> <a name="options" id="zap-cdk.UrlQueryStringAndDataDrivenNodes.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

The configuration options.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UrlQueryStringAndDataDrivenNodes.property.addParam">addParam</a></code> | <code>boolean</code> | If a query parameter should be added if none present. |
| <code><a href="#zap-cdk.UrlQueryStringAndDataDrivenNodes.property.enabled">enabled</a></code> | <code>boolean</code> | If query parameters and DDNs scanning should be enabled. |
| <code><a href="#zap-cdk.UrlQueryStringAndDataDrivenNodes.property.odata">odata</a></code> | <code>boolean</code> | If OData query filters should be scanned. |

---

##### `addParam`<sup>Optional</sup> <a name="addParam" id="zap-cdk.UrlQueryStringAndDataDrivenNodes.property.addParam"></a>

```typescript
public readonly addParam: boolean;
```

- *Type:* boolean

If a query parameter should be added if none present.

Default: false

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="zap-cdk.UrlQueryStringAndDataDrivenNodes.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

If query parameters and DDNs scanning should be enabled.

Default: true

---

##### `odata`<sup>Optional</sup> <a name="odata" id="zap-cdk.UrlQueryStringAndDataDrivenNodes.property.odata"></a>

```typescript
public readonly odata: boolean;
```

- *Type:* boolean

If OData query filters should be scanned.

Default: true

---


### UrlTest <a name="UrlTest" id="zap-cdk.UrlTest"></a>

- *Implements:* <a href="#zap-cdk.IUrlTest">IUrlTest</a>

Class representing a URL test.

*Example*

```typescript
const urlTest = new UrlTest({
  name: 'test one',
  url: 'http://www.example.com/path',
  operator: 'and',
  requestHeaderRegex: 'some-regex',
  requestBodyRegex: 'some-regex',
  responseHeaderRegex: 'some-regex',
  responseBodyRegex: 'some-regex',
  onFail: 'error',
});
```


#### Initializers <a name="Initializers" id="zap-cdk.UrlTest.Initializer"></a>

```typescript
import { UrlTest } from 'zap-cdk'

new UrlTest(options: IUrlTest)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UrlTest.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IUrlTest">IUrlTest</a></code> | - The configuration options  for the URL test. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.UrlTest.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IUrlTest">IUrlTest</a>

The configuration options  for the URL test.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UrlTest.property.onFail">onFail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.requestBodyRegex">requestBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.requestHeaderRegex">requestHeaderRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UrlTest.property.responseHeaderRegex">responseHeaderRegex</a></code> | <code>string</code> | *No description.* |

---

##### `onFail`<sup>Required</sup> <a name="onFail" id="zap-cdk.UrlTest.property.onFail"></a>

```typescript
public readonly onFail: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="zap-cdk.UrlTest.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="zap-cdk.UrlTest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="zap-cdk.UrlTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="zap-cdk.UrlTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestBodyRegex`<sup>Optional</sup> <a name="requestBodyRegex" id="zap-cdk.UrlTest.property.requestBodyRegex"></a>

```typescript
public readonly requestBodyRegex: string;
```

- *Type:* string

---

##### `requestHeaderRegex`<sup>Optional</sup> <a name="requestHeaderRegex" id="zap-cdk.UrlTest.property.requestHeaderRegex"></a>

```typescript
public readonly requestHeaderRegex: string;
```

- *Type:* string

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="zap-cdk.UrlTest.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

---

##### `responseHeaderRegex`<sup>Optional</sup> <a name="responseHeaderRegex" id="zap-cdk.UrlTest.property.responseHeaderRegex"></a>

```typescript
public readonly responseHeaderRegex: string;
```

- *Type:* string

---


### UserCredentials <a name="UserCredentials" id="zap-cdk.UserCredentials"></a>

- *Implements:* <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>

Represents the credentials for a user.

#### Initializers <a name="Initializers" id="zap-cdk.UserCredentials.Initializer"></a>

```typescript
import { UserCredentials } from 'zap-cdk'

new UserCredentials(options: IUserCredentials)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UserCredentials.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IUserCredentials">IUserCredentials</a></code> | - The options to initialize the user credentials. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.UserCredentials.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>

The options to initialize the user credentials.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.UserCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UserCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#zap-cdk.UserCredentials.property.totp">totp</a></code> | <code><a href="#zap-cdk.ITotpConfig">ITotpConfig</a></code> | *No description.* |

---

##### `password`<sup>Required</sup> <a name="password" id="zap-cdk.UserCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="zap-cdk.UserCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `totp`<sup>Optional</sup> <a name="totp" id="zap-cdk.UserCredentials.property.totp"></a>

```typescript
public readonly totp: ITotpConfig;
```

- *Type:* <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>

---


### Zap <a name="Zap" id="zap-cdk.Zap"></a>

- *Implements:* <a href="#zap-cdk.IZap">IZap</a>

Class representing the ZAP configuration.

*Example*

```typescript
const zapConfig = new Zap({
  env: new Environment({ /* environment config options *\/ }),
  jobs: [
    new Job({ /* job config options *\/ }),
    new Job({ /* another job config options *\/ })
  ]
});
```


#### Initializers <a name="Initializers" id="zap-cdk.Zap.Initializer"></a>

```typescript
import { Zap } from 'zap-cdk'

new Zap(options: IZap)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Zap.Initializer.parameter.options">options</a></code> | <code><a href="#zap-cdk.IZap">IZap</a></code> | - The ZAP configuration options. |

---

##### `options`<sup>Required</sup> <a name="options" id="zap-cdk.Zap.Initializer.parameter.options"></a>

- *Type:* <a href="#zap-cdk.IZap">IZap</a>

The ZAP configuration options.

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#zap-cdk.Zap.property.env">env</a></code> | <code><a href="#zap-cdk.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#zap-cdk.Zap.property.jobs">jobs</a></code> | <code><a href="#zap-cdk.IActiveScan">IActiveScan</a> \| <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a> \| <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a> \| <a href="#zap-cdk.ISpider">ISpider</a> \| <a href="#zap-cdk.IDelay">IDelay</a> \| <a href="#zap-cdk.IExitStatus">IExitStatus</a> \| <a href="#zap-cdk.IExport">IExport</a> \| <a href="#zap-cdk.IGraphQL">IGraphQL</a> \| <a href="#zap-cdk.IImport">IImport</a> \| <a href="#zap-cdk.IOpenAPI">IOpenAPI</a> \| <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a> \| <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a> \| <a href="#zap-cdk.IPostman">IPostman</a> \| <a href="#zap-cdk.IReplacer">IReplacer</a> \| <a href="#zap-cdk.IReport">IReport</a> \| <a href="#zap-cdk.IRequest">IRequest</a> \| <a href="#zap-cdk.ISoap">ISoap</a> \| <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a> \| <a href="#zap-cdk.INewType">INewType</a>[]</code> | *No description.* |

---

##### `env`<sup>Required</sup> <a name="env" id="zap-cdk.Zap.property.env"></a>

```typescript
public readonly env: IEnvironment;
```

- *Type:* <a href="#zap-cdk.IEnvironment">IEnvironment</a>

---

##### `jobs`<sup>Required</sup> <a name="jobs" id="zap-cdk.Zap.property.jobs"></a>

```typescript
public readonly jobs: IActiveScan | IActiveScanPolicy | IActiveScanConfig | ISpider | IDelay | IExitStatus | IExport | IGraphQL | IImport | IOpenAPI | IPassiveScanConfig | IPassiveScanWait | IPostman | IReplacer | IReport | IRequest | ISoap | ISpiderAjax | INewType[];
```

- *Type:* <a href="#zap-cdk.IActiveScan">IActiveScan</a> | <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a> | <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a> | <a href="#zap-cdk.ISpider">ISpider</a> | <a href="#zap-cdk.IDelay">IDelay</a> | <a href="#zap-cdk.IExitStatus">IExitStatus</a> | <a href="#zap-cdk.IExport">IExport</a> | <a href="#zap-cdk.IGraphQL">IGraphQL</a> | <a href="#zap-cdk.IImport">IImport</a> | <a href="#zap-cdk.IOpenAPI">IOpenAPI</a> | <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a> | <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a> | <a href="#zap-cdk.IPostman">IPostman</a> | <a href="#zap-cdk.IReplacer">IReplacer</a> | <a href="#zap-cdk.IReport">IReport</a> | <a href="#zap-cdk.IRequest">IRequest</a> | <a href="#zap-cdk.ISoap">ISoap</a> | <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a> | <a href="#zap-cdk.INewType">INewType</a>[]

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IActiveScan <a name="IActiveScan" id="zap-cdk.IActiveScan"></a>

- *Implemented By:* <a href="#zap-cdk.ActiveScan">ActiveScan</a>, <a href="#zap-cdk.IActiveScan">IActiveScan</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanConfig">ActiveScanConfig</a>, <a href="#zap-cdk.IActiveScanConfig">IActiveScanConfig</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanConfigParameters">ActiveScanConfigParameters</a>, <a href="#zap-cdk.IActiveScanConfigParameters">IActiveScanConfigParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanParameters">ActiveScanParameters</a>, <a href="#zap-cdk.IActiveScanParameters">IActiveScanParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanPolicy">ActiveScanPolicy</a>, <a href="#zap-cdk.IActiveScanPolicy">IActiveScanPolicy</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanPolicyDefinition">ActiveScanPolicyDefinition</a>, <a href="#zap-cdk.IActiveScanPolicyDefinition">IActiveScanPolicyDefinition</a>


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

- *Implemented By:* <a href="#zap-cdk.ActiveScanPolicyParameters">ActiveScanPolicyParameters</a>, <a href="#zap-cdk.IActiveScanPolicyParameters">IActiveScanPolicyParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.AjaxTest">AjaxTest</a>, <a href="#zap-cdk.IAjaxTest">IAjaxTest</a>

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

- *Implemented By:* <a href="#zap-cdk.AlertFilter">AlertFilter</a>, <a href="#zap-cdk.IAlertFilter">IAlertFilter</a>


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

- *Implemented By:* <a href="#zap-cdk.AlertFilterParameters">AlertFilterParameters</a>, <a href="#zap-cdk.IAlertFilterParameters">IAlertFilterParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.AlertTag">AlertTag</a>, <a href="#zap-cdk.IAlertTag">IAlertTag</a>


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

- *Implemented By:* <a href="#zap-cdk.AlertTags">AlertTags</a>, <a href="#zap-cdk.IAlertTags">IAlertTags</a>


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

- *Implemented By:* <a href="#zap-cdk.AlertTest">AlertTest</a>, <a href="#zap-cdk.IAlertTest">IAlertTest</a>

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

- *Implemented By:* <a href="#zap-cdk.AuthenticationParameters">AuthenticationParameters</a>, <a href="#zap-cdk.IAuthenticationParameters">IAuthenticationParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.AuthenticationParametersParameters">AuthenticationParametersParameters</a>, <a href="#zap-cdk.IAuthenticationParametersParameters">IAuthenticationParametersParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.AuthenticationParametersVerification">AuthenticationParametersVerification</a>, <a href="#zap-cdk.IAuthenticationParametersVerification">IAuthenticationParametersVerification</a>


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

- *Implemented By:* <a href="#zap-cdk.ContextStructure">ContextStructure</a>, <a href="#zap-cdk.IContextStructure">IContextStructure</a>


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

- *Implemented By:* <a href="#zap-cdk.ContextUser">ContextUser</a>, <a href="#zap-cdk.IContextUser">IContextUser</a>


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

- *Implemented By:* <a href="#zap-cdk.CookieData">CookieData</a>, <a href="#zap-cdk.ICookieData">ICookieData</a>

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

- *Implemented By:* <a href="#zap-cdk.DataDrivenNode">DataDrivenNode</a>, <a href="#zap-cdk.IDataDrivenNode">IDataDrivenNode</a>


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

- *Implemented By:* <a href="#zap-cdk.Delay">Delay</a>, <a href="#zap-cdk.IDelay">IDelay</a>


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

- *Implemented By:* <a href="#zap-cdk.DelayParameters">DelayParameters</a>, <a href="#zap-cdk.IDelayParameters">IDelayParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.ExcludedElement">ExcludedElement</a>, <a href="#zap-cdk.IExcludedElement">IExcludedElement</a>

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

- *Implemented By:* <a href="#zap-cdk.ExitStatus">ExitStatus</a>, <a href="#zap-cdk.IExitStatus">IExitStatus</a>


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

- *Implemented By:* <a href="#zap-cdk.ExitStatusParameters">ExitStatusParameters</a>, <a href="#zap-cdk.IExitStatusParameters">IExitStatusParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.Export">Export</a>, <a href="#zap-cdk.IExport">IExport</a>


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

- *Implemented By:* <a href="#zap-cdk.GraphQL">GraphQL</a>, <a href="#zap-cdk.IGraphQL">IGraphQL</a>


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

- *Implemented By:* <a href="#zap-cdk.HttpHeaders">HttpHeaders</a>, <a href="#zap-cdk.IHttpHeaders">IHttpHeaders</a>

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

- *Implemented By:* <a href="#zap-cdk.Import">Import</a>, <a href="#zap-cdk.IImport">IImport</a>


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

- *Implemented By:* <a href="#zap-cdk.InputVectors">InputVectors</a>, <a href="#zap-cdk.IInputVectors">IInputVectors</a>

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

- *Implemented By:* <a href="#zap-cdk.JsonPostData">JsonPostData</a>, <a href="#zap-cdk.IJsonPostData">IJsonPostData</a>

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

- *Implemented By:* <a href="#zap-cdk.MonitorTest">MonitorTest</a>, <a href="#zap-cdk.IMonitorTest">IMonitorTest</a>

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

- *Implemented By:* <a href="#zap-cdk.OpenAPI">OpenAPI</a>, <a href="#zap-cdk.IOpenAPI">IOpenAPI</a>


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

- *Implemented By:* <a href="#zap-cdk.PassiveScanConfig">PassiveScanConfig</a>, <a href="#zap-cdk.IPassiveScanConfig">IPassiveScanConfig</a>


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

- *Implemented By:* <a href="#zap-cdk.PassiveScanParameters">PassiveScanParameters</a>, <a href="#zap-cdk.IPassiveScanParameters">IPassiveScanParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.PassiveScanRule">PassiveScanRule</a>, <a href="#zap-cdk.IPassiveScanRule">IPassiveScanRule</a>


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

- *Implemented By:* <a href="#zap-cdk.PassiveScanWait">PassiveScanWait</a>, <a href="#zap-cdk.IPassiveScanWait">IPassiveScanWait</a>


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

- *Implemented By:* <a href="#zap-cdk.PolicyDefinition">PolicyDefinition</a>, <a href="#zap-cdk.IPolicyDefinition">IPolicyDefinition</a>


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

- *Implemented By:* <a href="#zap-cdk.PollAdditionalHeaders">PollAdditionalHeaders</a>, <a href="#zap-cdk.IPollAdditionalHeaders">IPollAdditionalHeaders</a>


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

- *Implemented By:* <a href="#zap-cdk.PostData">PostData</a>, <a href="#zap-cdk.IPostData">IPostData</a>

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

- *Implemented By:* <a href="#zap-cdk.Postman">Postman</a>, <a href="#zap-cdk.IPostman">IPostman</a>


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

- *Implemented By:* <a href="#zap-cdk.Replacer">Replacer</a>, <a href="#zap-cdk.IReplacer">IReplacer</a>


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

- *Implemented By:* <a href="#zap-cdk.ReplacerRule">ReplacerRule</a>, <a href="#zap-cdk.IReplacerRule">IReplacerRule</a>


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

- *Implemented By:* <a href="#zap-cdk.Report">Report</a>, <a href="#zap-cdk.IReport">IReport</a>

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

- *Implemented By:* <a href="#zap-cdk.Request">Request</a>, <a href="#zap-cdk.IRequest">IRequest</a>

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

- *Implemented By:* <a href="#zap-cdk.RequestorParameters">RequestorParameters</a>, <a href="#zap-cdk.IRequestorParameters">IRequestorParameters</a>

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

- *Implemented By:* <a href="#zap-cdk.Rule">Rule</a>, <a href="#zap-cdk.IRule">IRule</a>


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

- *Implemented By:* <a href="#zap-cdk.Rules">Rules</a>, <a href="#zap-cdk.IRules">IRules</a>


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

- *Implemented By:* <a href="#zap-cdk.SessionManagementParameters">SessionManagementParameters</a>, <a href="#zap-cdk.ISessionManagementParameters">ISessionManagementParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.SessionManagementParametersParameters">SessionManagementParametersParameters</a>, <a href="#zap-cdk.ISessionManagementParametersParameters">ISessionManagementParametersParameters</a>


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

- *Implemented By:* <a href="#zap-cdk.Soap">Soap</a>, <a href="#zap-cdk.ISoap">ISoap</a>

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

- *Implemented By:* <a href="#zap-cdk.Spider">Spider</a>, <a href="#zap-cdk.ISpider">ISpider</a>

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

- *Implemented By:* <a href="#zap-cdk.SpiderAjax">SpiderAjax</a>, <a href="#zap-cdk.ISpiderAjax">ISpiderAjax</a>

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

- *Implemented By:* <a href="#zap-cdk.SpiderParameters">SpiderParameters</a>, <a href="#zap-cdk.ISpiderParameters">ISpiderParameters</a>

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

- *Implemented By:* <a href="#zap-cdk.SpiderTest">SpiderTest</a>, <a href="#zap-cdk.ISpiderTest">ISpiderTest</a>

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

- *Implemented By:* <a href="#zap-cdk.StatisticsTest">StatisticsTest</a>, <a href="#zap-cdk.IStatisticsTest">IStatisticsTest</a>

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

- *Implemented By:* <a href="#zap-cdk.Technology">Technology</a>, <a href="#zap-cdk.ITechnology">ITechnology</a>


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

- *Implemented By:* <a href="#zap-cdk.TotpConfig">TotpConfig</a>, <a href="#zap-cdk.ITotpConfig">ITotpConfig</a>


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

- *Implemented By:* <a href="#zap-cdk.UrlQueryStringAndDataDrivenNodes">UrlQueryStringAndDataDrivenNodes</a>, <a href="#zap-cdk.IUrlQueryStringAndDataDrivenNodes">IUrlQueryStringAndDataDrivenNodes</a>

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

- *Implemented By:* <a href="#zap-cdk.UrlTest">UrlTest</a>, <a href="#zap-cdk.IUrlTest">IUrlTest</a>

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

- *Implemented By:* <a href="#zap-cdk.UserCredentials">UserCredentials</a>, <a href="#zap-cdk.IUserCredentials">IUserCredentials</a>


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

- *Implemented By:* <a href="#zap-cdk.Zap">Zap</a>, <a href="#zap-cdk.IZap">IZap</a>

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

