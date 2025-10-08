import { IActiveScan } from '../activeScan';
import { IActiveScanConfig } from '../activeScanConfig';
import { IActiveScanPolicy } from '../activeScanPolicy';
import { IDelay } from '../delay';
import { IExitStatus } from '../exitStatus';
import { IExport } from '../export';
import { IGraphQL } from '../graphql';
import { IImport } from '../import';
import { IOpenAPI } from '../openApi';
import { IPassiveScanConfig } from '../passiveScanConfig';
import { IPassiveScanWait } from '../passiveScanWait';
import { IPostman } from '../postman';
import { IReplacer } from '../replacer';
import { IReport } from '../report';
import { IRequest } from '../requestor';
import { ISoap } from '../soap';
import { ISpider } from '../spider';
import { ISpiderAjax } from '../spiderAjax';

export interface INewType {
  name: string;
  parameters?: Record<string, any>;
} // Generic job with name and optional parameters


export type IJob =
| IActiveScan
| IPassiveScanConfig
| IActiveScanPolicy
| IActiveScanConfig
| IPassiveScanWait
| ISpider
| ISpiderAjax
| IOpenAPI
| IGraphQL
| IRequest
| IReport
| IReplacer
| IImport
| IExport
| IExitStatus
| IDelay
| IPostman
| ISoap
| INewType
;