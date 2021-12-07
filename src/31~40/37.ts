const q37 = () => {
  interface User {
    id: string;
  }
  interface AppUser {
    appName: 'appName';
    appID: string;
  }
  interface ServiceUser {
    serviceName: 'serviceName';
    serviceID: string;
  }

  const user = { id: '1' };
  const appUser = { appName: 'appName', appID: 'appId' } as const;
  const serviceUser = {
    servicename: 'serviceName',
    serviceID: 'serviceID',
  } as const;

  function isService(o: any): o is ServiceUser {
    return o.serviceID === 'serviceID';
  }
  function isAppUser(o: any): o is AppUser {
    return o.appID === 'appID';
  }
  function isUser(o: any): o is User {
    return o.id === '1';
  }

  function a(o: any) {
    if (isService(o)) return o.serviceID;
    if (isAppUser(o)) return o.appID;
    if (isUser(o)) return o.id;
  }

  const result = a(user);
};
