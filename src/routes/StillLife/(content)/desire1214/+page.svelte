<script>
  import Error from '$lib/StillLife/Error.svelte';
  import Cover from '$lib/StillLife/Cover.svelte';
  import Title from '$lib/StillLife/Title.svelte';
  import BulletedListItem from '$lib/StillLife/BulletedListItem.svelte';
  import Callout from '$lib/StillLife/Callout.svelte';
  import ChildPage from '$lib/StillLife/ChildPage.svelte';
  import Code from '$lib/StillLife/Code.svelte';
  import ColumnList from '$lib/StillLife/ColumnList.svelte';
  import Column from '$lib/StillLife/Column.svelte';
  import Divider from '$lib/StillLife/Divider.svelte';
  import Embed from '$lib/StillLife/Embed.svelte';
  import Header from '$lib/StillLife/Header.svelte';
  import Image from '$lib/StillLife/Image.svelte';
  import IndentGroup from '$lib/StillLife/IndentGroup.svelte';
  import Underline from '$lib/StillLife/Underline.svelte';
  import InlineCode from '$lib/StillLife/InlineCode.svelte';
  import InlineColor from '$lib/StillLife/InlineColor.svelte';
  import Equation from '$lib/StillLife/Equation.svelte';
  import Link from '$lib/StillLife/Link.svelte';
  import NumberedListItem from '$lib/StillLife/NumberedListItem.svelte';
  import Paragraph from '$lib/StillLife/Paragraph.svelte';
  import Quote from '$lib/StillLife/Quote.svelte';
  import TodoItem from '$lib/StillLife/TodoItem.svelte';
  import Toggle from '$lib/StillLife/Toggle.svelte';
  import { setContext } from 'svelte';

  setContext('pageStuff', {
    pageId: '1f6bf61fdde647649429d112ceabc0f1',
    title: 'For Claire, on the Eve of the Ides of December',
    previous: '',
    next: ''
  });
</script>

<svelte:head>
  <title>For Claire, on the Eve of the Ides of December</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>For Claire, on the Eve of the Ides of December</Title>

<Code
  code={`I want you to hold my hidden parts
  in the open air
  with your head
  in my hair
  cheek to chest
  feeling the flow
  the ebb of my blood
  as you weave stories into my ear
  of lovers lighting
  your flame

I want you to trust that you are trusted
  to fail without fault
  that you are perfect
  right now
  your time
  not needed but so
  so wanted the way I want
  you to dance
  not for me
  but still a gift
  always free

I want to keep seeing your smile
  in the corners
  of my mouth`}
  language="plain text"
/>
