const q36 = () => {
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

  function a(o: ServiceUser | User | AppUser): string {
    if ('serviceID' in o) return o.serviceID;
    if ('appID' in o) return o.appID;
    return o.id;
  }

  const result = a(user);
};
