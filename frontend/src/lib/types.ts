export interface LoginUser {
  username: string;
  password: string;
}

export interface ResetPasswordInterface {
  password: string;
  verificationCode: string;
}

export interface ResetPasswordContactInterface {
  contact: string;
}

export interface Employee {
  _id?: string;
  fullname?: string;
  fullnameAr?: string;
  email?: string;
  phoneNumber?: string;
  jobTitle?: string;
  jobTitleAr?: string;
  profileImage?: any[];
  properties?: any[];
}

export interface AccidentConfigurationInterface {
  capacityType: "time" | "count" | "space";
  timeThreshold?: number;
  countThreshold?: number;
  spaceThreshold?: number;
}

export interface CameraInterface {
  ipAddress: string;
  cameraType: string;
  name?: string;
  description?: string;
  port: string;
  protocol: string;
  credentials: string;
  streamPath: string;
  connectionURL: string;
  videoData: string;
  videoFormat: string;
  networkConf: string;
  alertId: string;
}

export interface AlertChannelInterface {
  owner: string;
  channelType: string;
  alertDestination: string;
  message: string;
}
