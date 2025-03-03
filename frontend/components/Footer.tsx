import React, { ReactElement } from "react"
import Link from "next/link"

function Footer(): ReactElement {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a
              href="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/posts"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Posts
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/resources"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Resources
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/codeofconduct"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Code of Conduct
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://github.com/cdk-dev"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Github
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://www.cdkday.com/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              CDK Day
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center">
          <a
            href="https://join.slack.com/t/cdk-dev/shared_invite/zt-1vcqzk7kn-W73TrmhKVuIEWP2r8SelsA"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Slack</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/cdkdev_"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/cdk-dev/base"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; 2020-2023 - Made with{" "}
            <span role="img" aria-label="Green Heart Emoji">
              💚
            </span>{" "}
            by cdk.dev Community / Open Construct Foundation
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
