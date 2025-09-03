import { Construct } from 'constructs';
import { ISOAP } from "../../models/soap"; // Adjust the import path as necessary

interface SOAPProps {
  soap: ISOAP; // Ensure that the soap property matches the ISOAPParameters interface
}

class SOAPConfig extends Construct {
  config: ISOAP;

  constructor(scope: Construct, id: string, props: SOAPProps) {
    super(scope, id);

    // Validate that props.soap is provided
    if (!props.soap) {
      throw new Error("The soap property is required.");
    }

    this.config = props.soap;
  }

  toYaml() {
    return this.config;
  }
}

export { SOAPConfig };
