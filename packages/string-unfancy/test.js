'use strict'

import unfancy from './index'
import test from 'ava'

// -----------------------------------------------------------------------------
// group 01. various throws
// -----------------------------------------------------------------------------

test('01.01 - missing input yields undefined', t => {
  t.deepEqual(
    unfancy(),
    undefined,
    '01.01'
  )
})

// -----------------------------------------------------------------------------
// 02. normal use
// -----------------------------------------------------------------------------

test('02.01 - unfancies fancy strings', t => {
  t.deepEqual(
    unfancy('“zzz”'),
    `"zzz"`,
    '02.01'
  )
})

test('02.02 - copes with encoded HTML chars that happen to be fancy', t => {
  t.deepEqual(
    unfancy('zzz&rsquo;zzz'),
    `zzz'zzz`,
    '02.02'
  )
})

test('02.03 - fancies with triple-encoded HTML', t => {
  t.deepEqual(
    unfancy('zzz&amp;amp;rsquo;zzz'),
    `zzz'zzz`,
    '02.03'
  )
})

test('02.04 - removes non-breaking spaces', t => {
  t.deepEqual(
    unfancy('aaaa&nbsp;&ndash; bbbb'),
    `aaaa - bbbb`,
    '02.04.01'
  )
  t.deepEqual(
    unfancy('aaaa\u00A0\u2013 bbbb'),
    `aaaa - bbbb`,
    '02.04.02'
  )
})
