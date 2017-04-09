// @flow

import React from 'react'
import { View } from 'react-native'

const Row = ({ count, children, name }: { count: number, name: string, children: string }) => {

    return (<View>
        {count}
        {children}
    </View>)
}



export default Row