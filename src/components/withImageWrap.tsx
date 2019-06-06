import React from "react"
import AspectRatio from "../components/AspectRatio"

export default function withImageWrap(Component) {
  class WithImageWrap extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const { ratio, intRef } = this.props
      return (
        <>
          <AspectRatio ratio={ratio}>
            <Component ref={intRef} />
          </AspectRatio>
        </>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithImageWrap {...props} intRef={ref} />
  })
}