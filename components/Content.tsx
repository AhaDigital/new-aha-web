"use client"
import React from 'react';
import Link from 'next/link';
import NextImage from '@/components/primitives/NextImage';
import Heading from '@/components/primitives/Heading';
import Text from '@/components/primitives/Text';
import List from '@/components/primitives/List';
import Blurb from '@/components/primitives/Blurb';
import IconChevron from '@/components/primitives/icons/IconChevron';
import { scrollToElement } from '@/lib/scrollUtils';

// TODO: Clean up types by re using types from components or re usable types.
interface ListProps {
  id: string
  text: string
  textSecondary?: string
  linkTo: string
}

interface ColumnsProps {
  id: string
  content: Array<{
    id: string;
    innerHtml?: string;
    classNames?: string;
    type: string;
    headingLevel?: string
    src?: string;
    linkTo?: string;
    linkText?: string
    dimension?: string
    alt?: string
  }>;
}

interface ContentProps {
  id: string,
  type: string;
  classNames?: string
  headingLevel?: string
  innerHtml?: string
  list?: Array<ListProps>
  columns?: Array<ColumnsProps>
  src?: string;
  linkTo?: string;
  linkText?: string
  dimension?: string
  alt?: string
  forwardRef?: boolean
}

interface ContainerProps {
  withAside?: boolean
  asideLinks?: boolean
  columnClass?: string
  content: Array<ContentProps>
}


const Content: React.FC<ContainerProps> = ({ withAside, asideLinks, content, columnClass }) => {

  const stripTags = (str: string) => {
    const regex = /(<([^>]+)>)/ig
    return str.replace(regex, '')
  }
  const renderAsideLinks = (props: ContentProps) => {
    const { id, type, forwardRef, innerHtml = '' } = props

    const handleTargetFocus = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      scrollToElement(id)
    };

    switch (type) {
      case 'heading':
        if (forwardRef) {
          return (
            <li key={id}>
              <Link href={`#${id}`} scroll={false} onClick={handleTargetFocus}>
                <div>
                  <span>{stripTags(innerHtml)}</span>
                </div>
                <IconChevron />
              </Link>
            </li>
          )
        }
      default:
        return;
    }
  }

  const renderComponent = (props: ContentProps) => {
    const { id, type, classNames, headingLevel, list, columns, src, alt, dimension, innerHtml = '', forwardRef } = props
    switch (type) {
      case 'text':
        return innerHtml ? (<Text key={id} classNames={classNames} innerHtml={innerHtml} />) : null
      case 'heading':
        return <Heading key={id} {...(forwardRef ? { id: id } : null)} renderAs={headingLevel || 'h1'} classNames={classNames} innerHtml={innerHtml} />
      case 'list':
        return list ? (<List key={id} classNames={classNames} list={list} />) : null
      case 'image':
        return src ? <NextImage key={id} src={src} alt={alt || ''} dimension={dimension} /> : null;
      case 'columns':
        return columns ? (
          <div key={id} className='columns'>
            {columns.map(({ id, content }) => {
              return content && (
                <div key={id} className='column column-is-half'>
                  {
                    content.map(({ id, dimension, innerHtml = '', classNames, type, src, alt, linkTo, linkText, headingLevel }) => {
                      switch (type) {
                        case 'text':
                          return innerHtml ? (<Text key={id} classNames={classNames} innerHtml={innerHtml} />) : null
                        case 'image':
                          return src ? <NextImage key={id} src={src} alt={alt || ''} dimension={dimension} /> : null;
                        case 'heading':
                          return <Heading key={id} classNames={classNames} renderAs={headingLevel || 'h1'} innerHtml={innerHtml} />
                        case 'featuredLink':

                          return linkTo ? (
                            <Link href={linkTo} key={id}>
                              {innerHtml}
                            </Link>
                          ) : null;
                        case 'blurb':
                          return linkTo && linkText && src ? (<Blurb key={id} src={src} alt={alt} linkTo={linkTo} linkText={linkText} headingLevel={headingLevel || 'h1'} classNames={classNames} text={innerHtml} />) : null
                        default:
                          return null;
                      }
                    })
                  }
                </div>
              )
            })}
          </div>
        ) : null;

      default:
        return null;
    }
  }
  return withAside ? (
    <div className="columns">
      <div className={columnClass}>
        {
          content.map((props: ContentProps) => renderComponent(props))
        }
      </div>
    </div>
  ) :
    asideLinks ?
      content.map((props: ContentProps) => renderAsideLinks(props))
      : (
        <section className="container content">
          <div className="columns">
            <div className={columnClass}>
              {
                content.map((props: ContentProps) => renderComponent(props))
              }
            </div>
          </div>
        </section>
      );
};

export default Content;
