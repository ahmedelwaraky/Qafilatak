import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  


export default function AlertComponent({status,headContent,desContent}) {
  return (
    <Alert status={status}>
          <AlertIcon />
          <AlertTitle>{headContent}</AlertTitle>
          <AlertDescription>{desContent}</AlertDescription>
      </Alert>  )
}

