import { HStack, Spacer } from "@chakra-ui/react"
import { WalletMultiButtonDynamic } from "@solana/wallet-adapter-react-ui"
import { FC } from "react"
import styles from "../styles/Home.module.css"

const NavBar: FC = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButtonDynamic className={styles["wallet-adapter-button-trigger"]} />
    </HStack>
  )
}

export default NavBar