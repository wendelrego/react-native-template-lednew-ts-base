import React from 'react'

interface Screen {
    name: string,
    component: React.ComponentType<any>
}

export interface AppNavigationRegister {
    [screenName: string]: Screen
}
