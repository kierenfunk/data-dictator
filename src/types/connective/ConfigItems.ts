type ConfigItem = {
  id: string,
  partnerId: string,
  key: string,
  value: string
};

type ConfigItems = {
  success: boolean
  configItems: ConfigItem[]
};

export default ConfigItems;
