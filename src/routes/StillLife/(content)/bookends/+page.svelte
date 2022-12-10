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
    pageId: '9be3541630f74527a2f506ac6dd19a34',
    title: 'Bookends',
    previous: '',
    next: '/forgiveness'
  });
</script>

<svelte:head>
  <title>Bookends</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Bookends</Title>

<Code
  code={`Hard, heavy, often beautiful
	(or bent slices of thin steel)
reminders that Reality resides
	outside the stories
	proceedings untold on any page

They hold the words we choose to shelve
	the scruffed covers we assemble
	pristine volumes we hope to resemble
totems of imagination raised in subtle worship
of our unimaginable selves

Coffee stains, folded pulp, taped-up tears
	(sometimes even blood and tears!):
	traveling companions to marginal notes
	left by those who thought themselves &lt;em&gt;me&lt;/em&gt;
	to be read (perhaps) by others
	who &lt;em&gt;also
	weren&#039;t
&lt;/em&gt;
And though your voice has slowly seeped
into the stories of every tome
they are no  more &lt;em&gt;you&lt;/em&gt;
	these tales and treasures
	encoded in intricate ink-
	soaked pressure-tangled
	fibers of	dead wood
	dead leather and glue
than bookends are &lt;em&gt;ends&lt;/em&gt;

When all accounts must be collected
when time or/and tragedy require
the books be put in boxes
we finally see them for what they are
all the bookends we bought:
	masses working with gravity
	serving no purpose
	but keeping our stories
	straight

■`}
  language="plain text"
/>
