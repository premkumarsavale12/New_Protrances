import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { VideoBlock } from '@/blocks/VideBlock/Component'
import { Right } from '@/blocks/Right/Component'
import { MediBlock } from '@/blocks/MediBlock/Component'
import { Conten } from '@/blocks/Conten/Component'
import { FAQ } from '@/blocks/FAQ/Component'
import { Logo } from '@/blocks/Logo/Component'
import { Number } from '@/blocks/Number/Component'
import { Slider } from '@/blocks/Slider/Component'
import { References } from '@/blocks/Reference/Component'
import { Down } from '@/blocks/Down/Component'
import { Partner } from '@/blocks/Partner/Component'
import { Head } from '@/blocks/Head/Component'
import { Redirect } from '@/blocks/Redirect/Component'
import { ContactsBlocks } from '@/blocks/ContactBlock/Component'
import { Map } from '@/blocks/Map/Component'


const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  videoBlock: VideoBlock,
  right: Right,
  mediBlock: MediBlock,
  conten: Conten,
  faq: FAQ,
  logo: Logo,
  number: Number,
  slider: Slider,
  reference: References,
  down: Down,
  partner: Partner,
  head: Head,
  redirect: Redirect,
  contactsblocks: ContactsBlocks,
  map: Map
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>

                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
