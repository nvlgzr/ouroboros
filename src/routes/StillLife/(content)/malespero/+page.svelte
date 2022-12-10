<script>
  import Error from '$lib/notion2svelte/Error.svelte';
  import Cover from '$lib/notion2svelte/Cover.svelte';
  import Title from '$lib/notion2svelte/Title.svelte';
  import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
  import Callout from '$lib/notion2svelte/Callout.svelte';
  import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
  import Code from '$lib/notion2svelte/Code.svelte';
  import ColumnList from '$lib/notion2svelte/ColumnList.svelte';
  import Column from '$lib/notion2svelte/Column.svelte';
  import Divider from '$lib/notion2svelte/Divider.svelte';
  import Embed from '$lib/notion2svelte/Embed.svelte';
  import Header from '$lib/notion2svelte/Header.svelte';
  import Image from '$lib/notion2svelte/Image.svelte';
  import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
  import Underline from '$lib/notion2svelte/Underline.svelte';
  import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
  import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
  import Equation from '$lib/notion2svelte/Equation.svelte';
  import Link from '$lib/notion2svelte/Link.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
  import { setContext } from 'svelte';

  setContext('pageStuff', {
    pageId: '4166783ee4a644258d71fa8c1ee8e162',
    title: 'malespero',
    previous: '/forgiveness',
    next: ''
  });
</script>

<svelte:head>
  <title>malespero</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>malespero</Title>

<Code
  code={`Hope is an ember, you told me
Waiting for a leaf, a twig, a light wind
Hold onto hope and blow
Set yourself on fire!
I can’t, I said
There’s nothing left of me to burn
My heart is in ashes

■`}
  language="plain text"
/><Paragraph
  blockProps={{
    pageId: '4166783ee4a644258d71fa8c1ee8e162',
    id: 'cf2e2497-6f93-45a0-a164-bd4cc5ac43ec',
    created_time: '2022-12-10T00:32:00.000Z',
    last_edited_time: '2022-12-10T00:32:00.000Z'
  }}
/>
