'use client'

import { useState, useCallback } from 'react'
import { useAppKit } from '@reown/appkit/react'
import { useAccount, useSignMessage } from 'wagmi'
import Button from './Button'

export default function ConnectWallet() {
  const { open } = useAppKit()
  const { address, isConnecting } = useAccount()
  const [isSigning, setIsSigning] = useState(false)
  
  const { signMessage } = useSignMessage({
    onSuccess(data) {
      console.log('Success', data)
      setIsSigning(false)
    },
    onError(error) {
      console.error('Error', error)
      setIsSigning(false)
    }
  })

  const handleClick = useCallback(async () => {
    if (address) {
      setIsSigning(true)
      signMessage({ message: 'Welcome to Atomic Design!' })
    }
  }, [address, signMessage])

  const formatAddress = useCallback((addr: string) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }, [])

  const handleConnect = useCallback(async () => {
    try {
      await open()
    } catch (error) {
      console.error('Failed to open wallet selector:', error)
    }
  }, [open])

  return (
    <div className="flex items-center gap-2">
      {address ? (
        <Button
          key="sign-button"
          onClick={handleClick}
          disabled={isSigning}
          className="ml-4"
        >
          {isSigning ? 'Signing...' : formatAddress(address)}
        </Button>
      ) : (
        <Button
          key="connect-button"
          onClick={handleConnect}
          disabled={isConnecting}
          className="ml-4"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
    </div>
  )
} 